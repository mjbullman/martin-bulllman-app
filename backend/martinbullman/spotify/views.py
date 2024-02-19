import requests
from decouple import config

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle

spotify_api_url       = 'https://api.spotify.com/v1'
spotify_api_token_url = 'https://accounts.spotify.com/api/token'


def spotify_refresh_access_token():
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


class CurrentlyPlaying(APIView):
    """ Currently playing track from Spotify API """
    throttle_classes = [UserRateThrottle]

    def get(self, request):
        access_token = spotify_refresh_access_token()

        if access_token:
            headers = {
                'Authorization' : 'Bearer ' + access_token['access_token']
            }

            params = {
                #'market'           : 'IE',
                #'additional_types' : 'track'
            }

            response = requests.get(spotify_api_url + '/me/player/currently_playing', params=params, headers=headers)

            if response.status_code == 200:
                return Response(response.json())
            else:
                return False


class RecentlyPlayed(APIView):
    """ Recently played songs from Spotify API """
    throttle_classes = [UserRateThrottle]

    def get(self, request):
        access_token = spotify_refresh_access_token()

        if access_token:
            headers = {
                'Authorization' : 'Bearer ' + access_token['access_token']
            }

            params = {
                'limit' : 10
            }

            response = requests.get(spotify_api_url + '/me/player/recently-played', params=params, headers=headers)

            if response.status_code == 200:
                return Response(response.json())
            else:
                return False



class TopTracks(APIView):
    """ Top tracks from Spotify API """
    throttle_classes = [UserRateThrottle]

    def get(self, request):
        access_token = spotify_refresh_access_token()

        if access_token:
            headers = {
                'Authorization' : 'Bearer ' + access_token['access_token']
            }

            params = {
                'limit'      : 5,
                'offset'     : 5,
                'time_range' : 'medium_term'
            }

            response = requests.get(spotify_api_url + '/me/top/tracks', params=params, headers=headers)

            if response.status_code == 200:
                return Response(response.json())
            else:
                return False
        else:
            return False


class Playlist(APIView):
    """ Playlist from Spotify API """
    throttle_classes = [UserRateThrottle]

    def get(self, request):
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
                return Response(response.json())
            else:
                return False
        else:
            return False
