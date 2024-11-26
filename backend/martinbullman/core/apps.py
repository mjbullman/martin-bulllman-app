"""
This module defines the configuration for the Core application.

It specifies the app's metadata and provides an entry point for
app-specific initialization, such as signal registration or
custom setup tasks.
"""
from django.apps import AppConfig


class CoreConfig(AppConfig):
    """
    Configuration class for the Core app in the Martin Bullman application.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'
