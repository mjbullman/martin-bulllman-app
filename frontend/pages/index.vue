<template>

    <v-container>

        <v-row class="text-center full-height" align="center" justify="center">

            <v-col>

                <h1 class="text-h2 text-md-h1 ma-5" v-motion="animations.visibleUpDown(0, -30, 200)">

                   <span class="text-gradient-animation">Martin Bullman</span>

                </h1>

                <h3 class="text-h6 text-md-h4 text-medium-emphasis ma-5" v-motion="animations.visibleUpDown(100, -30, 200)">

                    Software Engineer & Full Stack Developer

                </h3>

                <div class="text-body-1 ma-5" v-motion="animations.visibleUpDown(200, -30, 200)">

                    Crafting innovative solutions for a digital world

                </div>

                <div v-motion="animations.visibleUpDown(400, -50, 200)">

                    <music-waves></music-waves>

                </div>

            </v-col>

        </v-row>

        <spotify></spotify>

    </v-container>

</template>

<script setup lang="ts">

    import MusicWaves from '~/components/music/MusicWaves.vue'

    import { useAnimations }    from '~/composables/animations'
    import Spotify from '~/components/sections/Spotify.vue'

    const animations = useAnimations()

</script>

<style scoped>

    .full-height {
        height: 90vh;
    }

</style>
