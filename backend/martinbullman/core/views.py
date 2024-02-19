import requests
from decouple import config
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.throttling import UserRateThrottle


class MartinbullmanAPIView(APIView):

    def get(self, request):
        return Response('Hello World!')
