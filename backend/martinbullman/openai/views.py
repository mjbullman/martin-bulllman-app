""" This module defines API views for interacting with OpenAI API. """

from rest_framework.views import APIView
from rest_framework.throttling import UserRateThrottle


class OpenAI(APIView):
    """ Custom exception for Spotify token-related errors. """

    throttle_classes = [UserRateThrottle]
