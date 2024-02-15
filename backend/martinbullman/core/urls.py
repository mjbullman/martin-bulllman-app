from django.urls import path

from . import views

urlpatterns = [
    path('test', views.MartinbullmanAPIView.as_view()),
    path('weather', views.WeatherForecastData.as_view())
]
