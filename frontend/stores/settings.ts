import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
    // state.
    const darkMode = ref<boolean>(true)

    // getters.
    const getDarkMode = computed(() => darkMode.value)

    // actions.
    function toggleDarkMode (): void {
      darkMode.value = !darkMode.value
    }

    return {
        darkMode,
        getDarkMode,
        toggleDarkMode
    }
})
