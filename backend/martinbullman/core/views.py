from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle


class ContactForm(APIView):
    """ Handle the contact form submission and send email to me. """
    throttle_classes = [UserRateThrottle]

    def post (self, request):
        send_mail(
            subject        = 'New Message from martinbullman.xyz',
            message        = 'That’s your message body',
            from_email     = 'martin.j.bullman@gmail.com',
            fail_silently  = False,
            recipient_list = ['admin@quickminutes.com'],
        )

        return Response(request.data['name'])


class MartinbullmanAPIView(APIView):

    def get (self, request):
        return Response('Hello World!')
