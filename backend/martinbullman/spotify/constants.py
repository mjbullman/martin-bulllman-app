""" This module defines constants for Spotify application. """

from decouple import config

SPOTIFY_APP_URL = f"{config('API_URL')}/spotify"
SPOTIFY_API_URL = 'https://api.spotify.com/v1'
SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token'
