import { mountSuspended } from '@nuxt/test-utils/runtime'
import MusicWaves from '~/components/music/MusicWaves.vue'

describe('MusicWaves Component', () => {
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    beforeEach(() => {
        mountComponent = async () => mountSuspended(MusicWaves)
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })

    it('renders 7 animated bars', async () => {
        const component = await mountComponent()
        const bars = component.findAll('.bar')
        expect(bars).toHaveLength(7)
    })
})
