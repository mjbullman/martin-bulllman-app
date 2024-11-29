"""
This module defines the URL routing for the OpenAI application.

Routes:
- /chat
"""

from . import views
from django.urls import path

urlpatterns = [
    path('chat', views.OpenAI.as_view(), name = 'chat-bot')
]
