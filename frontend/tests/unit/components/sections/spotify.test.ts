import { mountSuspended } from '@nuxt/test-utils/runtime'
import Spotify from '~/components/sections/Spotify.vue'

describe('Spotify Component', () => {
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    beforeEach(() => {
        mountComponent = async () => mountSuspended(Spotify)
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })
})
