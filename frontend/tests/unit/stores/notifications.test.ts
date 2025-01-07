import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useNotifications } from '~/stores/notifications'

describe('useNotifications Store', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should initialize snackbarData as null by default', () => {
        const notificationsStore = useNotifications()

        expect(notificationsStore.snackbarData).toBeNull()
    })

    it('should update snackbarData when updateSnackbarData is called', () => {
        const notificationsStore = useNotifications()

        const mockPayload = {
            color: 'success',
            variant: 'filled',
            timeout: 3000,
            location: 'top',
            closeDelay: 1000,
            multiLine: true
        }

        notificationsStore.updateSnackbarData(mockPayload)

        expect(notificationsStore.snackbarData).toEqual(mockPayload)
    })

    it('should set snackbarData to null when close is called', () => {
        const notificationsStore = useNotifications()

        const mockPayload = {
            color: 'error',
            variant: 'outlined',
            timeout: 5000,
            location: 'bottom',
            closeDelay: 2000,
            multiLine: false
        }

        notificationsStore.updateSnackbarData(mockPayload)
        notificationsStore.close()

        expect(notificationsStore.snackbarData).toBeNull()
    })
})
