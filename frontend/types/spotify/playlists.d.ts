export interface SpotifyPlaylist {
    id: string,
    name: string,
    images: Array<{ url: string }>,
    owner: {
        id: string,
        href: string,
        display_name: string,
        external_urls: { spotify: string }
    }
    tracks: {
        href: string,
        total: number,
    },
    external_urls: { spotify: string }
}
