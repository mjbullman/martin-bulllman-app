"""
This module defines the URL routing for the Weather application.

Routes:
- /current: Provides the current weather details.
- /forecast: Provides the weather forecast.
"""

from . import views
from django.urls import path

urlpatterns = [
    path('current', views.WeatherCurrent.as_view(), name = 'weather-current'),
    path('forecast', views.WeatherForecast.as_view(), name = 'weather-forecast')
]
