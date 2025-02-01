import { mountSuspended } from '@nuxt/test-utils/runtime'
import PageHeading from '~/components/headings/PageHeading.vue'

describe('Page Heading Component', () => {
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    beforeEach(() => {
        // helper to mount the component.
        mountComponent = async () => mountSuspended(PageHeading, {
            props: {
                headingText: 'Test Heading'
            }
        })
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })

    it('displays the correct heading text', async () => {
        const headingText = 'Test Heading'
        const component = await mountComponent()
        const heading = component.find('h1')
        expect(heading.text()).toBe(headingText)
    })

})
