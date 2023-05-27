<template>

    <v-btn @click="toggleTheme()" icon size="small">

        <v-icon color="primary" :icon="store.getDarkMode ? 'fa-regular fa-moon' : 'fa-regular fa-sun'"></v-icon>

    </v-btn>

</template>

<script setup>

    // imports.
    import { onBeforeMount }    from 'vue';
    import { useTheme }         from 'vuetify';
    import { useSettingsStore } from '@/stores/settings';

    // state.
    const theme = useTheme();
    const store = useSettingsStore();

    // methods.
    function toggleTheme () {
        store.toggleTheme();
    }

    function setTheme () {
        store.darkMode ? theme.global.name.value = 'customDarkTheme' : theme.global.name.value = 'customLightTheme';
    }

    // hooks.
    onBeforeMount(() => {
        setTheme();
    });

</script>

<style scoped>

</style>
