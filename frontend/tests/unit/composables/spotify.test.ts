import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { useSpotify } from '~/composables/spotify'

const mockPlaying = ref<{ progress_ms: number, item: { duration_ms: number } } | null>(null)
const mockProfileStatus = ref('success')

mockNuxtImport('useRuntimeConfig', () => () => ({
    public: { apiBaseUrl: 'http://localhost:8000/api/v1' }
}))

mockNuxtImport('useFetch', () => (url: string) => {
    if (url.includes('currently_playing')) {
        return { data: mockPlaying, status: ref('success') }
    }
    if (url.includes('profile')) {
        return { data: ref(null), status: mockProfileStatus }
    }
    return { data: ref(null), status: ref('success') }
})

describe('useSpotify Composable', () => {

    describe('playingProgress', () => {

        it('returns 0 when nothing is playing', () => {
            mockPlaying.value = null
            const { playingProgress } = useSpotify()
            expect(playingProgress.value).toBe(0)
        })

        it('returns correct progress percentage', () => {
            mockPlaying.value = { progress_ms: 60000, item: { duration_ms: 200000 } }
            const { playingProgress } = useSpotify()
            expect(playingProgress.value).toBe(30)
        })

        it('returns 100 when track is fully played', () => {
            mockPlaying.value = { progress_ms: 200000, item: { duration_ms: 200000 } }
            const { playingProgress } = useSpotify()
            expect(playingProgress.value).toBe(100)
        })

    })

    describe('isLoading', () => {

        it('returns true when profile status is pending', () => {
            mockProfileStatus.value = 'pending'
            const { isLoading } = useSpotify()
            expect(isLoading.value).toBe(true)
        })

        it('returns false when profile status is success', () => {
            mockProfileStatus.value = 'success'
            const { isLoading } = useSpotify()
            expect(isLoading.value).toBe(false)
        })

    })

})
