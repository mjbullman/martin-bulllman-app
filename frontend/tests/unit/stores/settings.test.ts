import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSettingsStore } from '~/stores/settings'

describe('useSettings Store', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should initialize darkMode to true by default', () => {
        const settingsStore = useSettingsStore()

        expect(settingsStore.darkMode).toBe(true)
    })

    it('should get darkMode value through getter', () => {
        const settingsStore = useSettingsStore()

        expect(settingsStore.getDarkMode).toBe(true)
    })

    it('should toggle darkMode value when toggleDarkMode is called', () => {
        const settingsStore = useSettingsStore()

        expect(settingsStore.darkMode).toBe(true)

        settingsStore.toggleDarkMode()
        expect(settingsStore.darkMode).toBe(false)

        settingsStore.toggleDarkMode()
        expect(settingsStore.darkMode).toBe(true)
    })
})
