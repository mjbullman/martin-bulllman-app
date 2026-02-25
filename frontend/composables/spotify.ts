import type { SpotifyTracks, PlayingTrack } from '~/types/spotify/tracks'
import type { SpotifyPaging } from '~/types/spotify/responses'
import type { SpotifyProfile } from '~/types/spotify/profile'
import type { SpotifyArtists } from '~/types/spotify/artists'
import type { SpotifyPlaylist } from '~/types/spotify/playlists'

interface SpotifyFollowing {
    artists: { total: number }
}

export function useSpotify () {

    const runtimeConfig = useRuntimeConfig()
    const baseUrl = runtimeConfig.public.apiBaseUrl

    const { data: profile, status: profileStatus } = useFetch<SpotifyProfile>(baseUrl + '/spotify/profile')
    const { data: following } = useFetch<SpotifyFollowing>(baseUrl + '/spotify/following')
    const { data: playlists } = useFetch<SpotifyPaging<SpotifyPlaylist>>(baseUrl + '/spotify/playlists')
    const { data: tracks } = useFetch<SpotifyPaging<SpotifyTracks>>(baseUrl + '/spotify/top_tracks')
    const { data: artists } = useFetch<SpotifyPaging<SpotifyArtists>>(baseUrl + '/spotify/top_artists')
    const { data: playing } = useFetch<PlayingTrack>(baseUrl + '/spotify/currently_playing')

    const isLoading = computed(() => profileStatus.value === 'pending')

    const playingProgress = computed(() => {
        if (!playing.value) return 0
        return (playing.value.progress_ms / playing.value.item.duration_ms) * 100
    })

    return { profile, following, playlists, tracks, artists, playing, playingProgress, isLoading }
}
