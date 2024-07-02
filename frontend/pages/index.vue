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

<!--        &lt;!&ndash; spotify &ndash;&gt;-->
<!--        <spotify></spotify>-->

    </v-container>

</template>

<script setup lang="ts">

    import Intro        from '~/components/sections/Intro.vue'
    import Spotify      from '~/components/sections/Spotify.vue'
    import Toolkit      from '~/components/sections/Toolkit.vue'
    import projects     from '~/components/sections/Projects.vue'
    import Publications from '~/components/sections/Publications.vue'

</script>

<style scoped>

    .full-height {
        height: 92vh;
    }

</style>
