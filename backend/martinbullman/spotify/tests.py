"""
This module defines unit tests for the Spotify application.

The tests verify the functionality of the Spotify API endpoints,
including user profile retrieval, playlist details, following artists,
top tracks, top artists, and recently played tracks.
Each test checks the correctness of the API responses and the presence
of expected data fields in the responses.

The Spotify API itself is mocked. These tests must not depend on a live
access token, which expires and can be revoked, and must not send the
client credentials over the network when the suite runs in CI.
"""

from unittest.mock import patch

from requests.exceptions import HTTPError
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

from .constants import SPOTIFY_APP_URL

TOKEN_RESPONSE = {
    'access_token': 'test-access-token',
    'token_type': 'Bearer',
    'expires_in': 3600
}

PROFILE_RESPONSE = {
    'display_name': 'Martin Bullman',
    'email': 'martin@example.com',
    'id': 'martinbullman'
}

PLAYLISTS_RESPONSE = {
    'items': [{'id': '1', 'name': 'Test Playlist'}],
    'total': 1
}

FOLLOWING_RESPONSE = {
    'artists': {
        'items': [{'id': '1', 'name': 'Test Artist'}],
        'total': 1
    }
}

TOP_TRACKS_RESPONSE = {
    'items': [{'id': '1', 'name': 'Test Track'}],
    'total': 1
}

TOP_ARTISTS_RESPONSE = {
    'items': [{'id': '1', 'name': 'Test Artist'}],
    'total': 1
}

RECENTLY_PLAYED_RESPONSE = {
    'items': [{'track': {'id': '1', 'name': 'Test Track'}}]
}


class FakeResponse:
    """ Stand in for a requests Response, exposing only what the views use. """

    def __init__(self, payload, status_code = status.HTTP_200_OK):
        self.payload = payload
        self.status_code = status_code

    def json(self) -> dict:
        """ Return the canned payload. """
        return self.payload

    def raise_for_status(self) -> None:
        """ Raise for any 4xx or 5xx status, as requests does. """
        if self.status_code >= status.HTTP_400_BAD_REQUEST:
            raise HTTPError(f"{self.status_code} Client Error")


def fake_spotify_get(*args, **kwargs):
    """
    Return the canned payload matching the requested Spotify endpoint.

    The views pass the url positionally in some places and as a keyword in
    others, so both forms are accepted here.
    """
    url = args[0] if args else kwargs.get('url', '')

    routes = (
        ('/me/playlists', PLAYLISTS_RESPONSE),
        ('/me/following', FOLLOWING_RESPONSE),
        ('/me/top/tracks', TOP_TRACKS_RESPONSE),
        ('/me/top/artists', TOP_ARTISTS_RESPONSE),
        ('/me/player/recently-played', RECENTLY_PLAYED_RESPONSE),
        ('/me', PROFILE_RESPONSE)
    )

    for path, payload in routes:
        if url.endswith(path):
            return FakeResponse(payload)

    return FakeResponse({}, status.HTTP_404_NOT_FOUND)


class SpotifyTest (APITestCase):
    """
    Test the Spotify API endpoints.

    This test class includes tests for various Spotify-related API endpoints,
    including fetching user profile, playlists, following artists, top tracks,
    top artists, and recently played tracks. Each test checks if the response
    is successful (status code 200) and validates the expected data fields.
    """

    def __init__(self, *args, **kwargs):
        """
        Init the class and API client for testing.

        """
        super().__init__(*args, **kwargs)
        self.client = APIClient()

    def setUp(self):
        """ Mock the token refresh and the Spotify API calls for every test. """
        post_patcher = patch(
            'spotify.views.requests.post',
            return_value = FakeResponse(TOKEN_RESPONSE)
        )
        get_patcher = patch('spotify.views.requests.get', side_effect = fake_spotify_get)

        self.mock_post = post_patcher.start()
        self.mock_get = get_patcher.start()

        self.addCleanup(post_patcher.stop)
        self.addCleanup(get_patcher.stop)

    def test_spotify_profile (self):
        """
        Test the 'get profile' API endpoint.

        This test checks if the profile endpoint returns the correct user profile data.
        It verifies that the response contains the 'display_name' and 'email' fields.
        """
        response = self.client.get(f"{SPOTIFY_APP_URL}/profile", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertIn('display_name', response.data)
        self.assertIn('email', response.data)

    def test_spotify_playlist (self):
        """
        Test the 'get playlist' API endpoint.

        This test checks if the playlists endpoint returns the user's playlists
        with the expected fields. It verifies that the response contains the 'items'
        and 'total' fields.
        """
        response = self.client.get(f"{SPOTIFY_APP_URL}/playlists", format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('items', response.data)
        self.assertIn('total', response.data)

    def test_spotify_following (self):
        """
        Test the 'get following artists' API endpoint.

        This test checks if the following endpoint returns the list of artists
        the user is following. It verifies that the response contains the 'artists'
        field.
        """
        response = self.client.get(f"{SPOTIFY_APP_URL}/following", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('artists', response.data)

    def test_spotify_top_tracks (self):
        """
        Test the 'get top tracks' API endpoint.

        This test checks if the top tracks endpoint returns the user's top tracks
        with the expected fields. It verifies that the response contains the 'items'
        and 'total' fields.
        """
        response = self.client.get(f"{SPOTIFY_APP_URL}/top_tracks", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('items', response.data)
        self.assertIn('total', response.data)

    def test_spotify_top_artists (self):
        """
        Test the 'get top artists' API endpoint.

        This test checks if the top artists endpoint returns the user's top artists
        with the expected fields. It verifies that the response contains the 'items'
        and 'total' fields.
        """
        response = self.client.get(f"{SPOTIFY_APP_URL}/top_artists", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('items', response.data)
        self.assertIn('total', response.data)

    def test_spotify_recently_played (self):
        """
        Test the 'get recently played tracks' API endpoint.

        This test checks if the recently played tracks endpoint returns the
        list of tracks that the user has recently played. It verifies that the
        response contains the 'items' field.
        """
        response = self.client.get(f"{SPOTIFY_APP_URL}/recently_played", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('items', response.data)

    def test_spotify_token_refresh_failure (self):
        """
        Test that a rejected refresh token surfaces as a 401.

        This is the failure the live tests hit when the refresh token is revoked,
        so it is asserted explicitly rather than left to a network error.
        """
        self.mock_post.return_value = FakeResponse(
            {'error': 'invalid_grant'},
            status.HTTP_400_BAD_REQUEST
        )

        response = self.client.get(f"{SPOTIFY_APP_URL}/profile", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_spotify_api_failure (self):
        """
        Test that a failing Spotify API call surfaces as a 500.

        This covers the SpotifyAPIException path, which no other test exercises.
        """
        self.mock_get.side_effect = None
        self.mock_get.return_value = FakeResponse(
            {'error': 'server_error'},
            status.HTTP_502_BAD_GATEWAY
        )

        response = self.client.get(f"{SPOTIFY_APP_URL}/profile", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR)
