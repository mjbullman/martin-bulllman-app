<template>

    <v-row class="mb-15">

        <page-sub-heading :sub-heading-text="'Toolkit'"></page-sub-heading>

        <v-col
            v-for="(group, index) in iconGroups"
            :key="index"
            cols="12"
            sm="12"
            md="3"
            lg="3"
            xl="3"
            class="d-flex flex-wrap justify-center align-content-center">

            <component
                :is="icon"
                v-for="(icon, i) in group"
                :key="i"
                class="icon">
            </component>

        </v-col>

    </v-row>

</template>

<script setup lang="ts">

    // icon components.
    import Git from '~/components/icons/technologies/Git.vue'
    import CSS from '~/components/icons/technologies/CSS.vue'
    import PHP from '~/components/icons/technologies/PHP.vue'
    import AWS from '~/components/icons/technologies/AWS.vue'
    import Jira from '~/components/icons/technologies/Jira.vue'
    import Java from '~/components/icons/technologies/Java.vue'
    import HTML from '~/components/icons/technologies/HTML.vue'
    import VueJS from '~/components/icons/technologies/VueJS.vue'
    import MySQL from '~/components/icons/technologies/MySQL.vue'
    import Linux from '~/components/icons/technologies/Linux.vue'
    import Azure from '~/components/icons/technologies/Azure.vue'
    import Docker from '~/components/icons/technologies/Docker.vue'
    import NuxtJS from '~/components/icons/technologies/NuxtJS.vue'
    import Django from '~/components/icons/technologies/Django.vue'
    import Python from '~/components/icons/technologies/Python.vue'
    import NodeJS from '~/components/icons/technologies/NodeJS.vue'
    import GitHub from '~/components/icons/technologies/GitHub.vue'
    import MongoDB from '~/components/icons/technologies/MongoDB.vue'
    import Vuetify from '~/components/icons/technologies/Vuetify.vue'
    import Laravel from '~/components/icons/technologies/Laravel.vue'
    import Postgres from '~/components/icons/technologies/Postgres.vue'
    import Jetbrains from '~/components/icons/technologies/Jetbrains.vue'
    import TypeScript from '~/components/icons/technologies/TypeScript.vue'
    import Javascript from '~/components/icons/technologies/Javascript.vue'
    import GoogleCloud from '~/components/icons/technologies/GoogleCloud.vue'
    import DigitalOcean from '~/components/icons/technologies/DigitalOcean.vue'

    import PageSubHeading from '~/components/headings/PageSubHeading.vue'

    // grouping icons into categories.
    const iconGroups = [
        [HTML, CSS, Javascript, TypeScript, VueJS, Vuetify, NuxtJS],
        [Java, PHP, Python, Laravel, Django, NodeJS],
        [Jetbrains, Linux, Docker, Git, GitHub, Jira],
        [AWS, Azure, GoogleCloud, DigitalOcean, MySQL, Postgres, MongoDB]
    ]

</script>

<style scoped>

</style>
