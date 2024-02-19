from . import views
from django.urls import path

urlpatterns = [
    path('current', views.WeatherForecastData.as_view()),
    path('forecast', views.WeatherForecastData.as_view())
]
