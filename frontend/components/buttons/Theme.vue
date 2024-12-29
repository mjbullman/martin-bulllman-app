<template>

    <v-btn icon size="small" aria-label="change theme" @click="toggleDarkMode()">

        <v-icon color="primary" :icon="store.getDarkMode ? 'fa-regular fa-sun' : 'fa-regular fa-moon'"></v-icon>

    </v-btn>

</template>

<script setup>

    // imports.
    import { useTheme } from 'vuetify'
    import { useSettingsStore } from '@/stores/settings'

    // state.
    const store = useSettingsStore()
    const theme = useTheme()

    // methods.
    function toggleDarkMode () {
        store.toggleDarkMode()
        theme.global.name.value = store.getDarkMode ? 'customDarkTheme' : 'customLightTheme'
    }

</script>

<style scoped>

</style>
