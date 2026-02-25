import type { SpotifyPaging } from '~/types/spotify/responses'
import type { SpotifyProfile } from '~/types/spotify/profile'
import type { SpotifyArtists } from '~/types/spotify/artists'
import type { SpotifyPlaylist } from '~/types/spotify/playlists'
import type { SpotifyTracks, PlayingTrack } from '~/types/spotify/tracks'

interface SpotifyFollowing {
    artists: { total: number }
}

export function useSpotify () {

    // runtime config.
    const runtimeConfig = useRuntimeConfig()
    const baseUrl = runtimeConfig.public.apiBaseUrl

    // API requests for spotify data.
    const { data: profile, status: profileStatus } = useFetch<SpotifyProfile>(
        baseUrl + '/spotify/profile'
    )
    const { data: following } = useFetch<SpotifyFollowing>(
        baseUrl + '/spotify/following'
    )
    const { data: playlists } = useFetch<SpotifyPaging<SpotifyPlaylist>>(
        baseUrl + '/spotify/playlists'
    )
    const { data: tracks } = useFetch<SpotifyPaging<SpotifyTracks>>(
        baseUrl + '/spotify/top_tracks'
    )
    const { data: artists } = useFetch<SpotifyPaging<SpotifyArtists>>(
        baseUrl + '/spotify/top_artists'
    )
    const { data: playing } = useFetch<PlayingTrack>(
        baseUrl + '/spotify/currently_playing'
    )

    // computed properties.
    const isLoading = computed(() => profileStatus.value === 'pending')
 
    const playingProgress = computed(() => {
        if (!playing.value) {
            return 0
        }

        return (playing.value.progress_ms / playing.value.item.duration_ms) * 100
    })

    // return data.
    return {
        profile, following, playlists, tracks,
        artists, playing, playingProgress, isLoading
    }
}
