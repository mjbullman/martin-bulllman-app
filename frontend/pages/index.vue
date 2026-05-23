<template>

    <v-container>

        <!-- intro -->
        <intro></intro>

        <!-- projects -->
        <projects></projects>

        <!-- projects -->
        <toolkit></toolkit>

        <!-- publications -->
        <publications></publications>

    </v-container>

</template>

<script setup lang="ts">

    // components.
    import Intro from '~/components/sections/Intro.vue'
    import Toolkit from '~/components/sections/Toolkit.vue'
    import Projects from '~/components/sections/Projects.vue'
    import Publications from '~/components/sections/Publications.vue'

    useSeoMeta({
        title: 'Martin Bullman | Software Engineer & Full Stack Developer',
        description: 'Portfolio of Martin Bullman — Software Engineer & Full Stack Developer specialising in Django, Vue, Nuxt and cloud infrastructure.',
        ogTitle: 'Martin Bullman | Software Engineer & Full Stack Developer',
        ogDescription: 'Portfolio of Martin Bullman — Software Engineer & Full Stack Developer specialising in Django, Vue, Nuxt and cloud infrastructure.',
        ogUrl: 'https://martinbullman.xyz'
    })

</script>

<style scoped>

    .full-height {
        height: 92vh;
    }

</style>
