import requests
from decouple import config

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle

spotify_api_url       = 'https://api.spotify.com/v1'
spotify_api_token_url = 'https://accounts.spotify.com/api/token'


def spotify_refresh_access_token ():
    """ Refresh Spotify access token using refresh token """
    headers = {
        'content-type': 'application/x-www-form-urlencoded'
    }

    params = {
        'grant_type'     : 'refresh_token',
        'client_id'      : config('SPOTIFY_CLIENT_ID'),
        'client_secret'  : config('SPOTIFY_CLIENT_SECRET'),
        'refresh_token'  : config('SPOTIFY_REFRESH_TOKEN')
    }

    response = requests.post(spotify_api_token_url, params=params, headers=headers)

    if response.status_code == 200:
        return response.json()
    else:
        return False


def spotify_headers (access_token):
    """ Created the spotify headers dictionary with Spotify access token """
    return {
        'Authorization': 'Bearer ' + access_token['access_token']
    }


class Playlist (APIView):
    """ My playlist from Spotify API """
    throttle_classes = [UserRateThrottle]

    def get (self, request):
        access_token = spotify_refresh_access_token()

        if access_token:
            headers = {
                'Authorization': 'Bearer ' + access_token['access_token']
            }

            params = {
                'limit'      : 5,
                'offset'     : 5,
                'time_range' : 'medium_term'
            }

            response = requests.get(spotify_api_url + '/me/playlists', params=params, headers=headers)

            if response.status_code == 200:
                return Response(response.json(), 200)
            else:
                return Response("Error getting playlists from Spotify", 500)
        else:
            return Response("Error refreshing Spotify access token.", 500)


class TopTracks (APIView):
    """ My top tracks from Spotify API """
    throttle_classes = [UserRateThrottle]

    def get (self, request):
        access_token = spotify_refresh_access_token()

        if access_token:
            headers = spotify_headers(access_token)

            params = {
                'limit'      : 5,
                'offset'     : 5,
                'time_range' : 'medium_term'
            }

            response = requests.get(spotify_api_url + '/me/top/tracks', params=params, headers=headers)

            if response.status_code == 200:
                return Response(response.json())
            else:
                return Response("Error getting top tracks from Spotify", 500)
        else:
            return Response("Error refreshing Spotify access token.", 500)


class RecentlyPlayed (APIView):
    """ My recently played songs from Spotify API """
    throttle_classes = [UserRateThrottle]

    def get (self, request):
        access_token = spotify_refresh_access_token()

        if access_token:
            headers = spotify_headers(access_token)

            params = {
                'limit' : 10
            }

            response = requests.get(spotify_api_url + '/me/player/recently-played', params=params, headers=headers)

            if response.status_code == 200:
                return Response(response.json())
            else:
                return Response("Error getting recently played tracks from Spotify", 500)
        else:
            return Response("Error refreshing Spotify access token.", 500)


class CurrentlyPlaying (APIView):
    """ Currently playing track from Spotify API """
    throttle_classes = [UserRateThrottle]

    def get (self, request):
        access_token = spotify_refresh_access_token()

        if access_token:
            headers = spotify_headers(access_token)

            params = {
                'market'           : 'IE',
                'additional_types' : 'track'
            }

            response = requests.get(spotify_api_url + '/me/player/currently_playing', params=params, headers=headers)

            if response.status_code == 200 or response.status_code == 204:
                return Response(response)
            else:
                return Response("Error getting currently playing track from Spotify", 500)
        else:
            return Response("Error refreshing Spotify access token.", 500)
