import { vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { createTestingPinia } from '@pinia/testing'
import { useNotifications } from '~/stores/notifications'
import SnackBar from '~/components/snackbars/SnackBar.vue'

describe('SnackBar Component', () => {
    let store: ReturnType<typeof useNotifications>
    let pinia: ReturnType<typeof createTestingPinia>
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    beforeEach(() => {
        Object.defineProperty(window, 'visualViewport', {
            value: { width: 1024, height: 768, addEventListener: vi.fn(), removeEventListener: vi.fn() },
            writable: true
        })

        pinia = createTestingPinia({ stubActions: false })
        store = useNotifications(pinia)

        mountComponent = async () =>
            mountSuspended(SnackBar, {
                global: { plugins: [pinia] }
            })
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })

    it('does not render snackbar when snackbarData is null', async () => {
        const component = await mountComponent()
        expect(component.find('.v-snackbar').exists()).toBe(false)
    })

    it('renders snackbar with correct text when snackbarData is set', async () => {
        store.updateSnackbarData({
            text: 'Message sent!',
            toggle: true,
            color: 'success',
            variant: 'tonal',
            timeout: 3000,
            location: 'top',
            closeDelay: 1000,
            multiLine: false
        })

        await mountComponent()
        expect(document.body.textContent).toContain('Message sent!')
    })

    it('renders a close button when snackbar is open', async () => {
        store.updateSnackbarData({
            text: 'Error occurred',
            toggle: true,
            color: 'error',
            variant: 'tonal',
            timeout: 5000,
            location: 'top',
            closeDelay: 1000,
            multiLine: false
        })

        await mountComponent()
        expect(document.body.querySelector('.v-btn')).not.toBeNull()
    })
})
