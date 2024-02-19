from django.urls import path

from . import views

urlpatterns = [
    path('playlists', views.Playlist().as_view()),
    path('top_tracks', views.TopTracks().as_view()),
    path('recently_played', views.RecentlyPlayed().as_view()),
    path('currently_playing', views.CurrentlyPlaying().as_view())
]
