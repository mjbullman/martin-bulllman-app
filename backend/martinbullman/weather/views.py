import requests
from decouple import config

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.throttling import UserRateThrottle

# weather api url
weather_api_url = 'https://api.weatherapi.com/v1'


class WeatherCurrent(APIView):
    """
    Gets the current weather data from the weather API.
    """
    throttle_classes = [UserRateThrottle]

    def get(self, request):

        response = requests.get(weather_api_url + '/current.json', {
            'key': config('WEATHER_API_KEY'),
            'q'  : 'Tallinn',
            'aqi': 'yes'
        })

        return Response(response.json())


class WeatherForecast(APIView):
    """
    Gets the ten-day weather forcast data from the weather API.
    """
    throttle_classes = [UserRateThrottle]

    def get(self, request):

        response = requests.get(weather_api_url + '/forecast.json', {
            'key'    : config('WEATHER_API_KEY'),
            'q'      : 'Tallinn',
            'aqi'    : 'yes',
            'days'   : 10,
            'alerts' : 'yes'
        })

        return Response(response.json())
