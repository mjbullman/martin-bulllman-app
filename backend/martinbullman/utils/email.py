""" This module defines methods for sending emails in Utils application. """

from decouple import config
from datetime import datetime
from mailjet_rest import Client
from requests.exceptions import RequestException

from .constants import CONTACT_FORM_MESSAGE_TEMPLATE_ID, CONTACT_FORM_RECEIPT_TEMPLATE_ID

mailjet = Client(
    auth = (config('MAILJET_API_KEY'), config('MAILJET_API_SECRET')),
    version = 'v3.1'
)


def send_contact_form_receipt_email(name, email):
    """
       Sends a receipt email to the user after they submit a contact form.

       Parameters:
       - name (str): The name of the recipient.
       - email (str): The email address of the recipient.

       Returns:
       - Mailjet API response object if the email is sent successfully.
       - Logs an error message if an exception occurs.
       """
    data = {
        'Messages': [
            {
                "From": {
                    "Email": config('EMAIL_FROM_ADDRESS'),
                    "Name": config('EMAIL_FROM_NAME')
                },
                "To": [
                    {
                        "Email": email,
                        "Name": name
                    }
                ],
                "Variables": {
                    "name": name,
                    "year": datetime.now().year
                },
                "TemplateID": CONTACT_FORM_RECEIPT_TEMPLATE_ID,
                "TemplateLanguage": True,
                "Subject": "Thank You for Your Message"
            }
        ]
    }

    try:
        return mailjet.send.create(data = data)
    except RequestException as exception:
        print(f"Error sending Mailjet email : {exception}")
        raise


def send_contact_form_message_email(name, email, message):
    """
    Sends an email to the site admin containing the contact form message details.

    Parameters:
    - name (str): The name of the person who submitted the form.
    - email (str): The email address of the person who submitted the form.
    - message (str): The message content submitted via the contact form.

    Returns:
    - Mailjet API response object if the email is sent successfully.
    - Logs an error message if an exception occurs.
    """
    data = {
        'Messages': [
            {
                "From": {
                    "Email": config('EMAIL_FROM_ADDRESS'),
                    "Name": config('EMAIL_FROM_NAME')
                },
                "To": [
                    {
                        "Email": config('EMAIL_FROM_ADDRESS'),
                        "Name": config('EMAIL_FROM_NAME')
                    }
                ],
                "Variables": {
                    "name": name,
                    "email": email,
                    "message": message,
                    "year": datetime.now().year
                },
                "TemplateID": CONTACT_FORM_MESSAGE_TEMPLATE_ID,
                "TemplateLanguage": True,
                "Subject": "Contact Form Message"
            }
        ]
    }

    try:
        return mailjet.send.create(data = data)
    except RequestException as exception:
        print(f"Error sending Mailjet email : {exception}")
        raise
