"""
This module defines the URL routing for the Assistant application.

Routes:
- /chat
-/greeting
"""

import views
from django.urls import path

urlpatterns = [
    path('chat', views.Chat.as_view(), name = 'chat-bot'),
    path('greeting', views.Greeting.as_view(), name = 'greeting')
]
