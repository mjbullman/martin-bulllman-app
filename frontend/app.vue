<template>

    <!-- main nuxt layout component -->
    <nuxt-layout></nuxt-layout>

</template>

<script setup lang="ts">

    useHead({
        htmlAttrs: {
            lang: 'en'
        },
        link: [
            // google requires a square favicon; it ignores non-square ones and falls back to a globe.
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
            { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png' },
            { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-512x512.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
        ]
    })

</script>

<style>

</style>
