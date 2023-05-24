import { useTheme }    from 'vuetify';
import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', () => {
    const theme = useTheme();

    // state.
    const darkMode = ref(false);

    // getters.
    const getDarkMode = computed(() => darkMode.value)

    // actions.
    function toggleTheme () {
        darkMode.value          = !darkMode.value;
        theme.global.name.value = darkMode.value ? 'customDarkTheme' : 'customLightTheme';
    }

    return {
        darkMode,
        getDarkMode,
        toggleTheme
    };
},
{
    persist: true
});
