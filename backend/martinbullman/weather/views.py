"""
This module defines views for interacting with the Weather API.

The views handle API requests for retrieving weather data, including current weather and
10-day forecasts, by interacting with an external Weather API.
"""

import requests
from .constants import *
from decouple import config
from requests.exceptions import RequestException

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import APIException
from rest_framework.throttling import UserRateThrottle


class WeatherAPIException(APIException):
    """ Custom exception for handling Weather API errors. """
    status_code    = 500
    default_code   = "weather_api_error"
    default_detail = "An error occurred while communicating with the Weather API."


class WeatherCurrent(APIView):
    """ API endpoint to retrieve current weather data. """

    throttle_classes = [UserRateThrottle]

    def get(self) -> Response:
        """
        Handle GET requests to fetch the current weather data for Tallinn.

        Returns: Response: A JSON response containing the current weather data, including
        temperature, humidity, and air quality index (AQI).
        Raises: WeatherAPIException: If there is an error communicating with the Weather API.
        """
        params = {
            'q': 'Tallinn',
            'aqi': 'yes',
            'key': config('WEATHER_API_KEY')
        }

        try:
            response = requests.get(
                url = f"{WEATHER_API_URL}/current.json",
                params = params,
                timeout = 30
            )
            response.raise_for_status()

            return Response(response.json())

        except RequestException as exception:
            print(f"Error fetching current weather: {exception}")
            raise WeatherAPIException(detail = "Error fetching current weather.") from exception


class WeatherForecast(APIView):
    """ API endpoint to retrieve a 10-day weather forecast for a given location. """

    throttle_classes = [UserRateThrottle]

    def get(self) -> Response:
        """
        Handle GET request to fetch the 10-day weather forecast for Tallinn.

        Returns: Response: A JSON response containing the 10-day weather forecast data,
        including temperature, humidity, air quality index (AQI), and any weather alerts.
        Raises: WeatherAPIException: If there is an error communicating with the Weather API.
        """
        params = {
            'key': config('WEATHER_API_KEY'),
            'q': 'Tallinn',
            'aqi': 'yes',
            'days': 10,
            'alerts': 'yes'
        }

        try:
            response = requests.get(
                url = f"{WEATHER_API_URL}/forecast.json",
                params = params,
                timeout = 30
            )
            response.raise_for_status()

            return Response(response.json())

        except RequestException as exception:
            print(f"Error fetching weather forecast: {exception}")
            raise WeatherAPIException(detail="Error fetching weather forecast") from exception
