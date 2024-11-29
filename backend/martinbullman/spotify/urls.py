"""
This module defines the URL routing for the Spotify application.

Routes:
- /profile: Provides the user's profile details from Spotify.
- /playlists: Retrieves the user's playlists from Spotify.
- /following: Retrieves the artists the user is following on Spotify.
- /top_tracks: Retrieves the user's top tracks from Spotify.
- /top_artists: Retrieves the user's top artists from Spotify.
- /recently_played: Retrieves the user's recently played tracks on Spotify.
- /currently_playing: Retrieves the currently playing track from Spotify.
"""

from . import views
from django.urls import path

urlpatterns = [
    path('profile', views.Profile().as_view(), name = 'profile'),
    path('playlists', views.Playlist().as_view(), name = 'playlists'),
    path('following', views.Following().as_view(), name = 'following'),
    path('top_tracks', views.TopTracks().as_view(), name = 'top_tracks'),
    path('top_artists', views.TopArtists().as_view(), name = 'top_artists'),
    path('recently_played', views.RecentlyPlayed().as_view(), name = 'recently_played'),
    path('currently_playing', views.CurrentlyPlaying().as_view(), name = 'currently_playing')
]
