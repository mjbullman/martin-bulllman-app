"""
Apps configurations for the core module of Martin Bullman application.
"""
from django.apps import AppConfig


class CoreConfig(AppConfig):
    """
    Configuration class for the Core app in the Martin Bullman application.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'
