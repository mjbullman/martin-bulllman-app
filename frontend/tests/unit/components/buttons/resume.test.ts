import { mountSuspended } from '@nuxt/test-utils/runtime'
import Resume from '~/components/buttons/Resume.vue'

describe('Resume Component', () => {
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    beforeEach(() => {
        // helper to mount the component.
        mountComponent = async () => mountSuspended(Resume)
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })

    it('renders the correct button text', async () => {
        const component = await mountComponent()
        const button = component.find('button')
        expect(button.text()).toBe('Resume')
    })
})
