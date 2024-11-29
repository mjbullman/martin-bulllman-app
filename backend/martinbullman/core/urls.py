"""
This module defines the URL routing for the Core application.

Routes:
- /contact: Handles the contact form submission.
"""

from . import views
from django.urls import path

urlpatterns = [
    path('contact', views.ContactForm.as_view(), name = 'contact')
]
