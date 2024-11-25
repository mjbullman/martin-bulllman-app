"""
This module contains unit tests for the Weather application.

The tests verify the functionality of weather data retrieval
via the API endpoints for both current and forecast data.
"""

from .constants import *
from rest_framework import status
from rest_framework.test import APITestCase, APIClient


class WeatherTest(APITestCase):
    """
    Test suite for the Weather app API endpoints.

    Includes tests for:
    - Current weather data retrieval.
    - 10-day weather forecast data retrieval.
    """

    def setUp(self):
        """
        Set up the API client used for testing.

        This method is run before each test to ensure a fresh
        client instance for consistent testing results.
        """
        self.client = APIClient()

    def test_weather_current(self):
        """
        Test the 'current' weather API endpoint.

        Ensures:
        - The endpoint returns a 200 OK status.
        - The response contains both 'location' and 'current' data.
        """
        response = self.client.get(f"{WEATHER_API_URL}/current", format='json')

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
        response = self.client.get(f"{WEATHER_API_URL}/forecast", format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('location', response.data, "Response missing 'location' data.")
        self.assertIn('forecast', response.data, "Response missing 'forecast' weather data.")
