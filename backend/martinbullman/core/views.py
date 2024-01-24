from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

class MartinbullmanAPIView(APIView):
    def get(self, request):
        return Response('Hello World!')


class WeatherForecastAPIView(APIView):
    def get(self, request):


        return Response('Hello World!')

