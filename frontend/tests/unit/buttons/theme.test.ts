import { mountSuspended } from '@nuxt/test-utils/runtime'
import { createTestingPinia } from '@pinia/testing'
import { useSettingsStore } from '@/stores/settings'
import Theme from '~/components/buttons/Theme.vue'

describe('Theme Component', () => {
    let store: ReturnType<typeof useSettingsStore>
    let pinia: ReturnType<typeof createTestingPinia>
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    beforeEach(() => {
        // create a new Pinia instance.
        pinia = createTestingPinia({
            stubActions: false
        })
        store = useSettingsStore(pinia)

        // helper to mount the component.
        mountComponent = async () =>
            mountSuspended(Theme, {
                global: {
                    plugins: [pinia],
                    stubs: ['FontAwesomeIcon']
                }
            })
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })

    it('calls toggleDarkMode the correct number of times', async () => {
        const component = await mountComponent()
        const button = component.find('button')

        await button.trigger('click')
        await button.trigger('click')

        expect(store.toggleDarkMode).toHaveBeenCalledTimes(2)
    })

    it('toggles the dark mode state correctly when the button is clicked', async () => {
        const component = await mountComponent()
        const button = component.find('button')

        await button.trigger('click')
        expect(store.getDarkMode).toBe(false)

        await button.trigger('click')
        expect(store.getDarkMode).toBe(true)
    })
})
