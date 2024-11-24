"""
This module defines the configuration for the Weather application.

It specifies the app's metadata and provides an entry point for
app-specific initialization, such as signal registration or
custom setup tasks.
"""

from django.apps import AppConfig


class WeatherConfig(AppConfig):
    """
    Configuration class for the Weather app.

    This app provides functionality to fetch and display weather data,
    including current weather and forecasts. It integrates with an
    external Weather API.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'weather'
