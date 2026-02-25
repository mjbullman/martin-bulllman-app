export interface SpotifyProfile {
    id: string
    email: string
    images: Array<{ url: string }>
    country: string
    display_name: string
    followers: {
        total: number
    }
    external_urls: { spotify: string }
}
