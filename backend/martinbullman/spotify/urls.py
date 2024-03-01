from django.urls import path

from . import views

urlpatterns = [
    path('profile', views.Profile().as_view()),
    path('playlists', views.Playlist().as_view()),
    path('following', views.Following().as_view()),
    path('top_tracks', views.TopTracks().as_view()),
    path('top_artists', views.TopArtists().as_view()),
    path('recently_played', views.RecentlyPlayed().as_view()),
    path('currently_playing', views.CurrentlyPlaying().as_view())
]
