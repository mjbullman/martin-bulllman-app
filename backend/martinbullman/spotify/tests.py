"""
This module defines unit tests for the Spotify application.

The tests verify the functionality of the Spotify API endpoints,
including user profile retrieval, playlist details, following artists,
top tracks, top artists, and recently played tracks.
Each test checks the correctness of the API responses and the presence
of expected data fields in the responses.
"""

from .constants import SPOTIFY_API_URL
from rest_framework import status
from rest_framework.test import APITestCase, APIClient


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
        Init the class and  API client for testing.

        """
        super().__init__(*args, **kwargs)
        self.client = APIClient()


    def test_spotify_profile (self):
        """
        Test the 'get profile' API endpoint.

        This test checks if the profile endpoint returns the correct user profile data.
        It verifies that the response contains the 'display_name' and 'email' fields.
        """
        response = self.client.get(f"{SPOTIFY_API_URL}/profile", format = 'json')

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
        response = self.client.get(f"{SPOTIFY_API_URL}/playlists", format='json')

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
        response = self.client.get(f"{SPOTIFY_API_URL}/following", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('artists', response.data)

    def test_spotify_top_tracks (self):
        """
        Test the 'get top tracks' API endpoint.

        This test checks if the top tracks endpoint returns the user's top tracks
        with the expected fields. It verifies that the response contains the 'items'
        and 'total' fields.
        """
        response = self.client.get(f"{SPOTIFY_API_URL}/top_tracks", format = 'json')

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
        response = self.client.get(f"{SPOTIFY_API_URL}/top_artists", format = 'json')

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
        response = self.client.get(f"{SPOTIFY_API_URL}/recently_played", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('items', response.data)

    # def test_spotify_currently_playing (self):
    #     """ Test the get currently playing track API endpoint """
    #     response = self.client.get(spotify_api_url + '/currently_playing', format='json')
    #
    #     # successful responses.
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
