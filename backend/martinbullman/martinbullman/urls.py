""" URLs for martinbullman project. """

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('core.urls')),
    path('api/v1/spotify/', include('spotify.urls')),
    path('api/v1/weather/', include('weather.urls'))
]
