<template>

    <v-btn @click="darkModeToggle()" icon size="small" aria-label="change theme">

        <v-icon color="primary" :icon="store.getDarkMode ? 'fa-regular fa-moon' : 'fa-regular fa-sun'"></v-icon>

    </v-btn>

</template>

<script setup>

    // imports.
    import { useSettingsStore } from '@/stores/settings';

    // state.
    const store = useSettingsStore();

    // methods.
    function darkModeToggle () {
        store.setDarkMode();
    }

</script>

<style scoped>

</style>
