from rest_framework import status
from rest_framework.test import APITestCase, APIClient

spotify_api_url = '/api/v1/spotify'


class SpotifyTest (APITestCase):
    """ Test the spotify app API endpoints """

    def setUp (self):
        """ Set up API client used for testing the spotify app """
        self.client = APIClient()

    def test_spotify_profile (self):
        """ Test the get profile API endpoint """
        response = self.client.get(spotify_api_url + '/profile', format='json')

        # successful responses.
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # contains profile display name.
        self.assertIn('display_name', response.data)

        # contains profile email.
        self.assertIn('email', response.data)

    def test_spotify_playlist (self):
        """ Test the get playlist API endpoint """
        response = self.client.get(spotify_api_url + '/playlists', format='json')

        # successful responses.
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # contains playlist items.
        self.assertIn('items', response.data)

        # contains total items.
        self.assertIn('total', response.data)

    def test_spotify_following (self):
        """ Test the following artists API endpoint """
        response = self.client.get(spotify_api_url + '/following', format='json')

        # successful responses.
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # contains artists items.
        self.assertIn('artists', response.data)

    def test_spotify_top_tracks (self):
        """ Test the get top tracks API endpoint """
        response = self.client.get(spotify_api_url + '/top_tracks', format='json')

        # successful responses.
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # contains top tracks items.
        self.assertIn('items', response.data)

        # contains total items.
        self.assertIn('total', response.data)

    def test_spotify_top_artists (self):
        """ Test the get top artists API endpoint """
        response = self.client.get(spotify_api_url + '/top_artists', format='json')

        # successful responses.
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # contains top artists items.
        self.assertIn('items', response.data)

        # contains total items.
        self.assertIn('total', response.data)

    def test_spotify_recently_played (self):
        """ Test the get recently played tracks API endpoint """
        response = self.client.get(spotify_api_url + '/recently_played', format='json')

        # successful responses.
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # contains playlist items.
        self.assertIn('items', response.data)

    # def test_spotify_currently_playing (self):
    #     """ Test the get currently playing track API endpoint """
    #     response = self.client.get(spotify_api_url + '/currently_playing', format='json')
    #
    #     # successful responses.
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
