"""
This module contains views for the Weather application.

The views handle API requests for retrieving weather data,
including current weather and 10-day forecasts, by
interacting with an external Weather API.
"""

import requests
from decouple import config

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import APIException
from rest_framework.throttling import UserRateThrottle

# base weather api url.
weather_api_url = 'https://api.weatherapi.com/v1'


class WeatherAPIException(APIException):
    """
    Custom exception for handling Weather API errors.

    This exception is raised when there are issues communicating with
    the external Weather API, such as network errors or invalid responses.

    Attributes:
        status_code (int): HTTP status code for the error (default: 500).
        default_detail (str): Default error message.
        default_code (str): Default error code.
    """
    status_code = 500
    default_detail = "An error occurred while communicating with the Weather API."
    default_code = "weather_api_error"


class WeatherCurrent(APIView):
    """
    API endpoint to retrieve current weather data.

    This endpoint communicates with the external Weather API to fetch
    the current weather for a specified location. The location can be
    provided via the `q` query parameter. If no location is provided,
    it defaults to "Tallinn".

    Throttling:
        The endpoint is throttled using `UserRateThrottle` to prevent abuse.

    Response:
        A JSON object containing current weather details, such as temperature,
        humidity, and air quality.

    Raises:
        WeatherAPIException: If there is an error communicating with the Weather API.
    """
    throttle_classes = [UserRateThrottle]

    def get(self, request):
        try:
            response = requests.get(weather_api_url + '/current.json', {
                'key': config('WEATHER_API_KEY'),
                'q'  : 'Tallinn',
                'aqi': 'yes'
            })

            # raise exception for HTTP errors.
            response.raise_for_status()

            return Response(response.json())

        except requests.RequestException as e:
            raise WeatherAPIException(detail=str(e))


class WeatherForecast(APIView):
    """
    API endpoint to retrieve a 10-day weather forecast.

    This endpoint communicates with the external Weather API to fetch
    weather forecast data for a specified location. The location can
    be provided via the `q` query parameter. If no location is provided,
    it defaults to "Tallinn".

    Throttling:
        The endpoint is throttled using `UserRateThrottle` to prevent abuse.

    Response:
        A JSON object containing the 10-day weather forecast, including
        daily temperatures, precipitation, alerts, and air quality.

    Raises:
        WeatherAPIException: If there is an error communicating with the Weather API.
    """
    throttle_classes = [UserRateThrottle]

    def get(self, request):
        try:
            response = requests.get(weather_api_url + '/forecast.json', {
                'key'    : config('WEATHER_API_KEY'),
                'q'      : 'Tallinn',
                'aqi'    : 'yes',
                'days'   : 10,
                'alerts' : 'yes'
            })

            # raise exception for HTTP errors.
            response.raise_for_status()  # Raise exception for HTTP errors

            return Response(response.json())

        except requests.RequestException as e:
            raise WeatherAPIException(detail=str(e))
