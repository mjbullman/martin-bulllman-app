import { mountSuspended } from '@nuxt/test-utils/runtime'
import AboutMe from '~/components/sections/AboutMe.vue'

describe('AboutMe Component', () => {
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    beforeEach(() => {
        mountComponent = async () => mountSuspended(AboutMe)
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })

    it('displays a welcome message', async () => {
        const component = await mountComponent()
        expect(component.text()).toContain('Welcome to my digital corner!')
    })

    it('displays the correct default temperature when weather data is unavailable', async () => {
        const component = await mountComponent()
        expect(component.text()).toContain('0°C Tallinn, Estonia')
    })
})
