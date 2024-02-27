from rest_framework import status
from rest_framework.test import APITestCase

# weather api url.
weather_api_url = '/api/v1/weather'


class WeatherTest(APITestCase):
    """ Test the weather app API endpoints """
    def test_weather_current (self):
        """ Test the current weather API endpoint """
        response = self.client.get(weather_api_url + '/current', format='json')

        # successful response.
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # response contains the location data.
        self.assertIn('location', response.data)

        # response contains the current data.
        self.assertIn('current', response.data)

    def test_weather_forecast (self):
        """ Test the forecast weather API endpoint """
        response = self.client.get(weather_api_url + '/forecast', format='json')

        # successful response.
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # response contains the location data.
        self.assertIn('location', response.data)

        # response contains the forecast data.
        self.assertIn('forecast', response.data)
