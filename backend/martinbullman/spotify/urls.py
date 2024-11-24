"""
This module defines the URL routing for the Spotify application.

It maps endpoint paths to their corresponding views, enabling
access to the following functionalities.

Routes:
- /profile: Provides the user's profile details from Spotify.
- /playlists: Retrieves the user's playlists from Spotify.
- /following: Retrieves the artists the user is following on Spotify.
- /top_tracks: Retrieves the user's top tracks from Spotify.
- /top_artists: Retrieves the user's top artists from Spotify.
- /recently_played: Retrieves the user's recently played tracks on Spotify.
- /currently_playing: Retrieves the currently playing track from Spotify.
"""
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
