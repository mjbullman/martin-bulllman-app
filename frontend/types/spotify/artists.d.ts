export interface SpotifyFollowing {
    artists: { total: number }
}

export interface SpotifyArtists {
    id: string
    href: string
    name: string
    images: Array<{ url: string }>
    external_urls: { spotify: string }
}

export interface SpotifyAlbum {
    id: string
    name: string
    images: Array<{ url: string }>
    artists: SpotifyArtists[]
    external_urls: { spotify: string }
}
