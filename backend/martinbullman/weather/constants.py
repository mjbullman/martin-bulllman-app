""" This module defines constants for Weather application. """

from decouple import config

WEATHER_API_URL = 'https://api.weatherapi.com/v1'
WEATHER_APP_URL = f"{config('API_URL')}/weather"
