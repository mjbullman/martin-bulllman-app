"""
This module defines unit tests for the Weather application.

The tests verify the functionality of weather data retrieval
via the API endpoints for both current and forecast data.
"""

from .constants import WEATHER_APP_URL
from rest_framework import status
from rest_framework.test import APITestCase, APIClient


class WeatherTest(APITestCase):
    """
    Test suite for the Weather app API endpoints.

    Includes tests for:
    - Current weather data retrieval.
    - 10-day weather forecast data retrieval.
    """
    def __init__(self, *args, **kwargs):
        """
        Init the class and API client for testing.

        """
        super().__init__(*args, **kwargs)
        self.client = APIClient()

    def test_weather_current(self):
        """
        Test the 'current' weather API endpoint.

        Ensures:
        - The endpoint returns a 200 OK status.
        - The response contains both 'location' and 'current' data.
        """
        response = self.client.get(f"{WEATHER_APP_URL}/current", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('location', response.data, "Response missing 'location' data.")
        self.assertIn('current', response.data, "Response missing 'current' weather data.")

    def test_weather_forecast(self):
        """
        Test the 'forecast' weather API endpoint.

        Ensures:
        - The endpoint returns a 200 OK status.
        - The response contains both 'location' and 'forecast' data.
        """
        response = self.client.get(f"{WEATHER_APP_URL}/forecast", format = 'json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('location', response.data, "Response missing 'location' data.")
        self.assertIn('forecast', response.data, "Response missing 'forecast' weather data.")
