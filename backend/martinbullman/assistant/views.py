"""
This module defines API views for interacting with my Assistant API.
"""

from decouple import config
from openai import OpenAI
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle
from rest_framework.views import APIView
from requests.exceptions import RequestException


def extract_ai_message(messages):
    for message in messages:
        role = next((item[1] for item in message if item[0] == "role"), None)
        if role == "assistant":
            content = next((item[1] for item in message if item[0] == "content"), None)
            if content:
                text_content = next(
                    (text[1] for text in content[0] if text[0] == "text"), None
                )
                if text_content:
                    return next((item[1] for item in text_content if item[0] == "value"), None)


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

            assistant = client.beta.assistants.create(
                name="Martin Bullman Assistant",
                instructions=(
                    "You are assisting Martin Bullman, a CTO and experienced developer. "
                    "Provide precise and efficient solutions, keeping responses professional and technical. "
                    "When discussing coding topics, offer best practices and optimizations. "
                ),
                tools=[{"type": "code_interpreter"}],
                model="gpt-4o",
            )

            thread = client.beta.threads.create()

            message = client.beta.threads.messages.create(
                thread_id=thread.id,
                role="user",
                content="Can you tell me if martin avialable for work?"
            )


            run = client.beta.threads.runs.create_and_poll(
                thread_id=thread.id,
                assistant_id=assistant.id,
                instructions="Can you tell me if martin avialable for work?"
            )

            if run.status == 'completed':
                messages = client.beta.threads.messages.list(
                    thread_id=thread.id
                )
                return Response(extract_ai_message(messages))
            else:
                print(run.status)

        except RequestException as exception:
            print(f"Error fetching Spotify profile: {exception}")
            return Response(exception)
