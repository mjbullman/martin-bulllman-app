import { SpotifyAlbum } from './artists'
import { SpotifyArtists } from './artists'

export interface SpotifyTracks {
   id: string,
   name: string,
   duration_ms: number,
   album: SpotifyAlbum
   artists: SpotifyArtists[]
   external_urls: { spotify: string }
}

export interface PlayingTrack {
    item: SpotifyTracks,
    timestamp: number,
    progress_ms: number,
    is_playing: boolean,
    currently_playing_type: string,
} 
