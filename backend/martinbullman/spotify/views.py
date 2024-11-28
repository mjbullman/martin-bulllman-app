"""
This module defines API views for interacting with Spotify API.

Including user profile, playlists, following artists, and top tracks or artists.
It handles Spotify's OAuth token refresh and API requests for personalized data.
"""

import requests
from .constants import *
from decouple import config
from requests.exceptions import RequestException

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import APIException
from rest_framework.throttling import UserRateThrottle


def create_spotify_headers(access_token: str) -> dict:
    """
    Create the headers for Spotify API requests.

    Args: access_token (str): The access token for Spotify API.
    Returns: dict: Headers including the authorization token.
    """
    return {'Authorization': 'Bearer ' + access_token}


def refresh_spotify_access_token() -> Response:
    """
    Refresh Spotify access token using the refresh token.

    Returns: Response: A dictionary containing the refreshed access token and additional metadata.
    Raises: SpotifyAPIException: If there is an error communicating with the Spotify API.
    """
    headers = {'content-type': 'application/x-www-form-urlencoded'}

    params = {
        'grant_type': 'refresh_token',
        'client_id': config('SPOTIFY_CLIENT_ID'),
        'client_secret': config('SPOTIFY_CLIENT_SECRET'),
        'refresh_token': config('SPOTIFY_REFRESH_TOKEN')
    }

    try:
        response = requests.post(
            SPOTIFY_TOKEN_URL,
            params = params,
            headers = headers,
            timeout = 30
        )
        response.raise_for_status()

        return response.json()

    except RequestException as exception:
        print(f"Error refreshing Spotify access token: {exception}")
        raise SpotifyTokenException(
            detail = "Error refreshing Spotify access token."
        ) from exception


class SpotifyTokenException(APIException):
    """ Custom exception for Spotify token-related errors. """

    status_code = status.HTTP_401_UNAUTHORIZED
    default_code = 'spotify_token_error'
    default_detail = 'Failed to refresh Spotify access token.'


class SpotifyAPIException(APIException):
    """ Custom exception for Spotify API-related errors. """

    status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    default_code = 'spotify_api_error'
    default_detail = 'Error communicating with the Spotify API.'


class SpotifyBaseView(APIView):
    """ Base view for Spotify API interactions, providing common functionality. """

    throttle_classes = [UserRateThrottle]

    def get_access_token(self) -> str:
        """
        Retrieve a refreshed access token.

        Returns: str: The access token if successful.
        Raises: SpotifyTokenException: If the token cannot be refreshed.
        """
        token_data = refresh_spotify_access_token()

        return token_data['access_token']


class Profile(SpotifyBaseView):
    """ Fetch the user's Spotify profile information. """

    def get(self) -> Response:
        """
        Handle GET request to fetch the authenticated user's profile from Spotify.

        Returns: Response: A response containing the user's Spotify profile information.
        Raises: SpotifyAPIException: If there is an error communicating with the Spotify API.
        """
        token   = self.get_access_token()
        headers = create_spotify_headers(token)

        try:
            response = requests.get(f"{SPOTIFY_API_URL}/me", headers = headers, timeout = 30)
            response.raise_for_status()

            return Response(response.json())

        except RequestException as exception:
            print(f"Error fetching Spotify profile: {exception}")
            raise SpotifyAPIException(detail = "Error fetching Spotify profile.") from exception


class Playlist(SpotifyBaseView):
    """ Fetch the user's playlists from Spotify. """

    def get(self) -> Response:
        """
        Handle GET request to fetch the user's playlists on Spotify.

        Returns: Response: A response containing the user's playlists.
        Raises: SpotifyAPIException: If there is an error communicating with the Spotify API.
        """
        token = self.get_access_token()
        params = {'limit': 10, 'offset': 0}
        headers = create_spotify_headers(token)

        try:
            response = requests.get(
                f"{SPOTIFY_API_URL}/me/playlists",
                headers = headers,
                params = params,
                timeout = 30
            )
            response.raise_for_status()

            return Response(response.json())

        except RequestException as exception:
            print(f"Error fetching Spotify playlists: {exception}")
            raise SpotifyAPIException(detail = "Error fetching Spotify playlists.") from exception


class Following(SpotifyBaseView):
    """ Fetch the artists the user is following on Spotify. """

    def get(self) -> Response:
        """
        Handle GET request to fetch the artists that the user is following on Spotify.

        Returns: Response: A response containing a list of artists that the user is following.
        Raises: SpotifyAPIException: If there is an error communicating with the Spotify API.
        """
        token = self.get_access_token()
        params = {'type': 'artist'}
        headers = create_spotify_headers(token)

        try:
            response = requests.get(
                url = f"{SPOTIFY_API_URL}/me/following",
                headers = headers,
                params = params,
                timeout = 30
            )
            response.raise_for_status()

            return Response(response.json())

        except RequestException as exception:
            print(f"Error fetching followed artists: {exception}")
            raise SpotifyAPIException(
                detail = "Error fetching followed artists from Spotify."
            ) from exception


class TopTracks(SpotifyBaseView):
    """ Fetch the user's top tracks from Spotify API """

    def get(self) -> Response:
        """
        Handle GET request to fetch the user's top tracks from Spotify.

        Returns: Response: A response containing a list of the user's top tracks.
        Raises: SpotifyAPIException: If there is an error communicating with the Spotify API.
        """
        token = self.get_access_token()
        headers = create_spotify_headers(token)

        try:
            params = {
                'limit': 10,
                'offset': 0,
                'time_range': 'short_term'
            }

            response = requests.get(
                url = f"{SPOTIFY_API_URL}/me/top/tracks",
                headers = headers,
                params = params,
                timeout = 30
            )
            response.raise_for_status()

            return Response(response.json())

        except RequestException as exception:
            print(f"Error fetching top tracks: {exception}")
            raise SpotifyAPIException(
                detail = "Error fetching top tracks from Spotify."
            ) from exception


class TopArtists(SpotifyBaseView):
    """ Fetch the user's top artists from Spotify API """

    def get(self) -> Response:
        """
        Handle GET request to fetch the user's top artists from Spotify.

        Returns: Response: A response containing a list of the user's top artists.
        Raises: SpotifyAPIException: If there is an error communicating with the Spotify API.
        """
        token = self.get_access_token()
        headers = create_spotify_headers(token)

        params = {
            'limit': 10,
            'offset': 0,
            'time_range': 'long_term'
        }

        try:
            response = requests.get(
                url = f"{SPOTIFY_API_URL}/me/top/artists",
                headers = headers,
                params = params,
                timeout = 30
            )
            response.raise_for_status()

            return Response(response.json())

        except RequestException as exception:
            print(f"Error fetching top artists: {exception}")
            raise SpotifyAPIException(
                detail="Error fetching top artists from Spotify."
            ) from exception


class RecentlyPlayed(SpotifyBaseView):
    """ Fetch the user's recently played tracks from the Spotify API."""

    def get(self) -> Response:
        """
        Handle GET request to fetch the user's recently played tracks from Spotify.

        Returns: Response: A response containing a list of recently played tracks.
        Raises: SpotifyAPIException: If there is an error communicating with the Spotify API.
        """
        token = self.get_access_token()
        params = {'limit': 10}
        headers = create_spotify_headers(token)

        try:
            response = requests.get(
                url = f"{SPOTIFY_API_URL}/me/player/recently-played",
                headers = headers,
                params = params,
                timeout = 30
            )
            response.raise_for_status()

            return Response(response.json())

        except RequestException as exception:
            print(f"Error fetching recently played tracks: {exception}")
            raise SpotifyAPIException(
                detail = "Error fetching recently played tracks from Spotify."
            ) from exception


class CurrentlyPlaying(SpotifyBaseView):
    """ Fetch the currently playing track from the Spotify API. """

    def get(self) -> Response:
        """
        Handle GET request to fetch the currently playing track from Spotify.

        Returns: Response: A response containing the currently playing track details or a message
        if no track is playing.
        Raises: SpotifyAPIException: If there is an error communicating with the Spotify API.
        """
        token   = self.get_access_token()
        params  = {'market': 'IE', 'additional_types': 'track'}
        headers = create_spotify_headers(token)

        try:
            response = requests.get(
                url = f"{SPOTIFY_API_URL}/me/player/currently_playing",
                headers = headers,
                params = params,
                timeout = 30
            )
            response.raise_for_status()

            # check if there is no currently playing track
            if response.status_code == status.HTTP_204_NO_CONTENT:
                return Response('Currently no tracks playing.', status.HTTP_204_NO_CONTENT)

            return Response(response.json(), status.HTTP_200_OK)

        except RequestException as exception:
            print(f"Error fetching currently playing track: {exception}")
            raise SpotifyAPIException(
                detail = "Error fetching currently playing track from Spotify."
            ) from exception
