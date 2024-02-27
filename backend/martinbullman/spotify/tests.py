from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory


class SpotifyTest(APITestCase):
    def test_currently_playing(self):
        response = self.client.get('/spotify/playlists/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
