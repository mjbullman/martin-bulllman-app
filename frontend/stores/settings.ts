import { useTheme } from 'vuetify'
import { defineStore } from 'pinia'
import { watch, ref, computed } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
    const theme = useTheme()

    // state.
    const darkMode = ref<boolean>(true)
    const cookie = useCookie<boolean>('dark-mode', {
      default: () => darkMode.value,
      watch: true
    })

    // sync darkMode with cookie on initialization.
    darkMode.value = cookie.value ?? true
    theme.global.name.value = darkMode.value ? 'customDarkTheme' : 'customLightTheme'

    // getters.
    const getDarkMode = computed(() => darkMode.value)

    // actions.
    function toggleDarkMode (): void {
      darkMode.value = !darkMode.value
      cookie.value = darkMode.value
    }

    // watchers.
    watch(
      darkMode,
      (newValue) => {
        theme.global.name.value = newValue ? 'customDarkTheme' : 'customLightTheme'
      },
      { immediate: true }
    )

    return {
      darkMode,
      getDarkMode,
      toggleDarkMode
    }
  },
  {
    persist: true // persist the pinia state.
  }
)
