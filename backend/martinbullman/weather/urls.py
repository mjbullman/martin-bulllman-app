from . import views
from django.urls import path

urlpatterns = [
    path('current', views.WeatherCurrent.as_view()),
    path('forecast', views.WeatherForecast.as_view())
]
