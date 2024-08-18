from unittest.mock import patch, MagicMock
from rest_framework.test import APITestCase

from utils.services.email import send_contact_form_receipt_email, \
    send_contact_form_message_email

class EmailTests(APITestCase):

    @patch('utils.services.email.config')
    @patch('utils.services.email.mailjet.send.create')
    @patch('utils.services.email.logger')
    def test_send_contact_form_receipt_email_failure(self, mock_logger, mock_send_create, mock_config):
        # Mock the config
        mock_config.side_effect = lambda key: {
            'EMAIL_FROM_ADDRESS': 'from@example.com',
            'EMAIL_FROM_NAME': 'Sender Name',
            'MAILJET_API_KEY': 'dummy_key',
            'MAILJET_API_SECRET': 'dummy_secret'
        }.get(key)
    #
    #     # Mock the mailjet send.create to raise an exception
    #     mock_send_create.side_effect = Exception('API error')
    #
    #     # Call the function
    #     response = send_contact_form_receipt_email('John Doe', 'john@example.com')
    #     print("Response received:", response)
    #
    #     # Assert the logger.error was called with the correct formatted string
    #     mock_logger.error.assert_called_once_with(
    #         'send_contact_form_receipt_email error: API error')
    #     self.assertIsNone(response)

    # @patch('utils.config')
    # @patch('utils.mailjet.send.create')
    # @patch('utils.logger')
    # def test_send_contact_form_message_email_success(self, mock_logger, mock_send_create, mock_config):
    #     # Mock the config
    #     mock_config.side_effect = lambda key: {
    #         'EMAIL_FROM_ADDRESS': 'from@example.com',
    #         'EMAIL_FROM_NAME': 'Sender Name',
    #         'MAILJET_API_KEY': 'dummy_key',
    #         'MAILJET_API_SECRET': 'dummy_secret'
    #     }.get(key)
    #
    #     # Mock the mailjet send.create response
    #     mock_send_create.return_value = MagicMock(status_code=200)
    #
    #     # Call the function
    #     response = send_contact_form_message_email('John Doe', 'john@example.com', 'Test message')
    #
    #     # Assert the mailjet send.create was called
    #     mock_send_create.assert_called_once()
    #     self.assertEqual(response.status_code, 200)
    #     mock_logger.error.assert_not_called()
    #
    # @patch('utils.config')
    # @patch('utils.mailjet.send.create')
    # @patch('utils.logger')
    # def test_send_contact_form_message_email_failure(self, mock_logger, mock_send_create, mock_config):
    #     # Mock the config
    #     mock_config.side_effect = lambda key: {
    #         'EMAIL_FROM_ADDRESS': 'from@example.com',
    #         'EMAIL_FROM_NAME': 'Sender Name',
    #         'MAILJET_API_KEY': 'dummy_key',
    #         'MAILJET_API_SECRET': 'dummy_secret'
    #     }.get(key)
    #
    #     # Mock the mailjet send.create to raise an exception
    #     mock_send_create.side_effect = Exception('API error')
    #
    #     # Call the function
    #     response = send_contact_form_message_email('John Doe', 'john@example.com', 'Test message')
    #
    #     # Assert the logger.error was called
    #     mock_logger.error.assert_called_once_with('send_contact_form_receipt_email error: API error')
    #     self.assertIsNone(response)
