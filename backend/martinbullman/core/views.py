import requests
from decouple import config
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.throttling import UserRateThrottle


class MartinbullmanAPIView(APIView):
    def get(self, request):
        return Response('Hello World!')


class WeatherForecastData(APIView):
    """
    Gets the current weather forcast data from the weather API.
    """
    throttle_classes = [UserRateThrottle]

    def get(self, request):
        response = requests.get(config('WEATHER_API_URL') + '/current.json', {
            'key': config('WEATHER_API_KEY'),
            'q': 'Tallinn'})

        return Response(response.json())
