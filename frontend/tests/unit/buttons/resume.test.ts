import { mountSuspended } from '@nuxt/test-utils/runtime'
import Resume from '~/components/buttons/Resume.vue'

describe('Resume Component', () => {

    it('mounts successfully', async () => {
        const component = await mountSuspended(Resume)
        expect(component.exists()).toBe(true)
    })

    it('renders the correct button text', async () => {
        const component = await mountSuspended(Resume)
        const button = component.find('button')
        expect(button.text()).toBe('Resume')
    })

})
