<template>

    <v-btn icon size="small" aria-label="change theme" @click="toggleDarkMode()">

        <v-icon color="primary" :icon="store.getDarkMode ? 'fa-regular fa-sun' : 'fa-regular fa-moon'"></v-icon>

    </v-btn>

</template>

<script setup>

    // imports.
    import { useSettingsStore } from '@/stores/settings'

    // state.
    const store = useSettingsStore()

    // methods.
    function toggleDarkMode () {
        store.toggleDarkMode()
    }

</script>

<style scoped>

</style>
