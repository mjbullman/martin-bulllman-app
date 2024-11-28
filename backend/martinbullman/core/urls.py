from django.urls import path

from . import views

urlpatterns = [
    path('contact', views.ContactForm.as_view()),
]
