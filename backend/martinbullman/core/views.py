"""
This module handles the core functionality for the web application.
"""

import requests
from .constants import *
from decouple import config
from utils.services.email import *

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle


class ContactForm(APIView):
    """
    This class provides the core functionality for handling contact form submissions.

    It ensures secure communication through Google reCAPTCHA verification to block spam
    and facilitates email notifications to both the user (as a receipt) and the site owner
    with the submitted details.
    """
    throttle_classes = [UserRateThrottle]

    def post(self, request) -> Response:
        try:
            name    = request.data.get('name')
            email   = request.data.get('email')
            token   = request.data.get('recaptcha_token')
            message = request.data.get('message')

            recaptcha_data = {
                'secret'   : config('GOOGLE_RECAPTCHA_SECRET_KEY'),
                'response' : token
            }

            response = requests.post(
                GOOGLE_RECAPTCHA_SITE_VERIFY,
                data=recaptcha_data
            )
            result = response.json()

            # google recaptcha check for spambots.
            if result.get('success') and result.get('score') > float(config('GOOGLE_RECAPTCHA_SCORE')):

                # send receipt email to customer.
                send_contact_form_receipt_email(name, email)
                # send notification email to me.
                send_contact_form_message_email(name, email, message)

                return Response(
                    'Thank you for reaching out! I\'ll get back to you as soon as possible.'
                )

            else:
                return Response(
                    "Unable to verify your submission. Please try again.",
                    status=status.HTTP_400_BAD_REQUEST
                )
        except Exception as e:
            print(f"An unexpected error occurred: {e}")
            return Response(
                'An unexpected error occurred. Please try again later.',
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
