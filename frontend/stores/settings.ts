import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
    // state.
    const darkMode = ref<boolean>(true)
    const mobileNavigationDrawer = ref<boolean>(false)

    // getters.
    const getDarkMode = computed(() => darkMode.value)
    const getMobileNavigationDrawer = computed(() => mobileNavigationDrawer.value)

    // actions.
    function toggleDarkMode (): void {
      darkMode.value = !darkMode.value
    }

    function toggleMobileNavigationDrawer (): void {
        mobileNavigationDrawer.value = !mobileNavigationDrawer.value
    }

    return {
        darkMode,
        getDarkMode,
        toggleDarkMode,
        mobileNavigationDrawer,
        getMobileNavigationDrawer,
        toggleMobileNavigationDrawer
    }
})
