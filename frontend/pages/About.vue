<template>

    <v-container fluid class="pa-0">

        <page-heading heading-text="About"></page-heading>

        <v-container>

            <about-me></about-me>

            <!-- spotify -->
            <spotify></spotify>

        </v-container>

    </v-container>

</template>

<script setup lang="ts">

    useSeoMeta({
        title: 'About | Martin Bullman',
        description: 'Learn about Martin Bullman — his background, experience, and the technologies he works with.',
        ogTitle: 'About | Martin Bullman',
        ogDescription: 'Learn about Martin Bullman — his background, experience, and the technologies he works with.',
        ogUrl: 'https://martinbullman.xyz/about'
    })

    // components.
    import AboutMe from '~/components/sections/AboutMe.vue'
    import Spotify from '~/components/sections/Spotify.vue'
    import PageHeading from '~/components/headings/PageHeading.vue'

</script>

<style scoped>

</style>
