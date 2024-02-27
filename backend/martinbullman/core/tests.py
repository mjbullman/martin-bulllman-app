from django.test import TestCase
from rest_framework.test import APIRequestFactory


class WeatherTest(TestCase):
    def test_current_weather(self):
        factory = APIRequestFactory()
        request = factory.get('/weather/current/')
        assert 0
