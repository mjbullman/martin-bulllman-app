import { mountSuspended } from '@nuxt/test-utils/runtime'
import { createTestingPinia } from '@pinia/testing'
import AppNavigationBar from '~/components/layout/AppNavigationBar.vue'

describe('AppNavigationBar Component', () => {
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    beforeEach(() => {
        const pinia = createTestingPinia({ stubActions: false })

        mountComponent = async () =>
            mountSuspended(AppNavigationBar, {
                global: {
                    plugins: [pinia],
                    stubs: {
                        VAppBar: { template: '<div><slot /><slot name="append" /></div>' },
                        FontAwesomeIcon: true,
                        NuxtImg: true
                    }
                }
            })
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })

    it('renders nav links for About, Projects and Contact', async () => {
        const component = await mountComponent()
        const text = component.text()
        expect(text).toContain('About')
        expect(text).toContain('Projects')
        expect(text).toContain('Contact')
    })

    it('renders exactly 3 nav links', async () => {
        const component = await mountComponent()
        const navLinks = component.findAll('.nav .v-btn')
        expect(navLinks).toHaveLength(3)
    })
})
