<template>

    <v-container>

        <!-- intro -->
        <intro></intro>

        <!-- projects -->
        <in-progress></in-progress>

        <!-- publications -->
        <publications></publications>

        <!-- spotify -->
        <spotify></spotify>

    </v-container>

</template>

<script setup lang="ts">

    import Intro        from '~/components/sections/Intro.vue'
    import Spotify      from '~/components/sections/Spotify.vue'
    import InProgress   from '~/components/sections/InProgress.vue'
    import Publications from '~/components/sections/Publications.vue'

</script>

<style scoped>

    .full-height {
        height: 90vh;
    }

</style>
