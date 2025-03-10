"""
This module defines the configuration for the Utils application.

It specifies the app's metadata and provides an entry point for
app-specific initialization, such as signal registration or
custom setup tasks.
"""

from django.apps import AppConfig


class UtilsConfig(AppConfig):
    """
    Configuration class for the Utils app.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'utils'
