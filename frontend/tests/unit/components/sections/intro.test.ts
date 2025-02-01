import { mountSuspended } from '@nuxt/test-utils/runtime'
import IntroComponent from '~/components/sections/Intro.vue'

describe('Intro Component', () => {
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    beforeEach(() => {
        mountComponent = async () => mountSuspended(IntroComponent)
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })

    it('contain correct text', async () => {
        const component = await mountComponent()

        expect(component.text()).toContain('Martin Bullman')
        expect(component.text()).toContain('Software Engineer & Full Stack Developer')
    })
})
