import { useTheme }    from 'vuetify'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
    const theme = useTheme()

    theme.global.name.value = 'customDarkTheme'

    // state.
    const darkMode = ref<boolean>(true);
    const cookie   = useCookie<boolean>('dark-mode', { default: () => (darkMode.value), watch: true })

    // getters.
    const getDarkMode = computed(() => darkMode.value)

    // actions.
    function setDarkMode () : void {
        // update the dark mode state value.
        darkMode.value          = !darkMode.value
        // update the dark mode cookie value.
        cookie.value            = darkMode.value
        // update the dark mode vuetify theme.
        theme.global.name.value = darkMode.value ? 'customDarkTheme' : 'customLightTheme';
    }

    return {
        darkMode,
        getDarkMode,
        setDarkMode
    };
},
{
    persist: true // persist the pinia state.
});
