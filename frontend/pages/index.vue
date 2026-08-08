<template>

    <v-container>

        <!-- intro -->
        <intro></intro>

        <!-- projects -->
        <projects></projects>

        <!-- toolkit -->
        <toolkit></toolkit>

        <!-- publications -->
        <publications></publications>

    </v-container>

</template>

<script setup lang="ts">

    // components.
    import { defineAsyncComponent } from 'vue'
    import Intro from '~/components/sections/Intro.vue'

    // constants.
    import { SITE_TITLE, SITE_DESCRIPTION } from '~/constants/seo'

    const Projects = defineAsyncComponent(() => import('~/components/sections/Projects.vue'))
    const Toolkit = defineAsyncComponent(() => import('~/components/sections/Toolkit.vue'))
    const Publications = defineAsyncComponent(() => import('~/components/sections/Publications.vue'))

    useSeoMeta({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        ogTitle: SITE_TITLE,
        ogDescription: SITE_DESCRIPTION
    })

</script>

<style scoped>

    .full-height {
        height: 92vh;
    }

</style>
