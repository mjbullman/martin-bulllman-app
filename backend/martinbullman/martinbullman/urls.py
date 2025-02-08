"""
This module defines the top level URL routing for the main martinbullman application.

Routes:
- /admin/
- /api/v1/
- /api/v1/spotify/
- /api/v1/weather/
- api/v1/assistant/
"""

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls, name = 'admin'),
    path('api/v1/', include('core.urls'), name = 'api'),
    path('api/v1/spotify/', include('spotify.urls'), name = 'spotify'),
    path('api/v1/weather/', include('weather.urls') , name = 'weather'),
    path('api/v1/assistant/', include('assistant.urls'), name = 'assistant')
]
