"""
This module defines API views for interacting with my Assistant API.
"""

from decouple import config
from openai import OpenAI
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle
from rest_framework.views import APIView
from requests.exceptions import RequestException


class Chat(APIView):
    """ Chat API endpoint. """
    throttle_classes = [UserRateThrottle]


class Greeting(APIView):
    """ Greeting API endpoint. """
    throttle_classes = [UserRateThrottle]

    def get(self, request):  # pylint: disable=unused-argument
        """
        Retrieve a refreshed access token.

        Returns: object: The response from ChatGPT3.
        Raises: RequestException: If request fails.
        """

        try:
            client = OpenAI(
                api_key=config('OPENAI_API_KEY'),  # This is the default and can be omitted
            )

            chat_completion = client.chat.completions.create(
                messages=[
                    {
                        "role": "user",
                        "content": "Say this is a test",
                    }
                ],
                model="gpt-4o",
            )

            return Response(chat_completion)

        except RequestException as exception:
            print(f"Error fetching Spotify profile: {exception}")
            return Response(exception)
