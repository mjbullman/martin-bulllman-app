import requests
from decouple import config
from utils.services.email import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle



class ContactForm(APIView):
    """ Handle the contact form submission and send email to me. """
    throttle_classes = [UserRateThrottle]

    def post (self, request):
        name    = request.data.get('name')
        email   = request.data.get('email')
        token   = request.data.get('recaptcha_token')
        message = request.data.get('message')

        recaptcha_data = {
            'secret': config('GOOGLE_RECAPTCHA_SECRET_KEY'),
            'response': token
        }

        response = requests.post(
            'https://www.google.com/recaptcha/api/siteverify',
            data=recaptcha_data
        )

        result = response.json()

        if result.get('success') and result.get('score') > float(config('GOOGLE_RECAPTCHA_SCORE')):

            # send receipt email to customer.
            send_contact_form_receipt_email(name, email)
            # send message email to me.
            send_contact_form_message_email(name, email, message)

            return Response('Thank you for reaching out! I\'ll get back to you as soon as possible.', 200)
        else:
            return Response('Thank you for reaching out! I\'ll get back to you as soon as possible.', 500)


class MartinbullmanAPIView(APIView):

    def get (self, request):
        return Response('Hello World!')
