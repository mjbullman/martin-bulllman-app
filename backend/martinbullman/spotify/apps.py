"""
This module defines the configuration for the Spotify application.

It specifies the app's metadata and provides an entry point for
app-specific initialization, such as signal registration or
custom setup tasks.
"""
from django.apps import AppConfig


class SpotifyConfig(AppConfig):
    """
    Configuration class for the Spotify app.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'spotify'
