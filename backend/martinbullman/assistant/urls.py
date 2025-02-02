"""
This module defines the URL routing for the Assistant application.

Routes:
- /chat
- /greeting
"""

from django.urls import path
from . import views

urlpatterns = [
    path('chat', views.Chat.as_view(), name = 'chat_bot'),
    path('greeting', views.Greeting.as_view(), name = 'greeting')
]
