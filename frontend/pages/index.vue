<template>

    <v-container>

        <!-- main section -->
        <v-row class="text-center full-height" align="center" justify="center">

            <v-col>

                <h1 class="text-h2 text-md-h1 ma-5" >

                   <span class="text-gradient-animation">Martin Bullman</span>

                </h1>

                <h2 class="text-h6 text-md-h4 text-medium-emphasis ma-5" >

                    Software Engineer & Full Stack Developer

                </h2>

                <div class="text-body-1 ma-5">

                    Crafting innovative solutions for a digital world

                </div>

                <div>

                    <music-waves></music-waves>

                </div>

            </v-col>

        </v-row>

        <!-- spotify component -->
        <spotify></spotify>

    </v-container>

</template>

<script setup lang="ts">

    import Spotify    from '~/components/sections/Spotify.vue'
    import MusicWaves from '~/components/music/MusicWaves.vue'

    import { useAnimations } from '~/composables/animations'

    const animations = useAnimations()

</script>

<style scoped>

    .full-height {
        height: 90vh;
    }

</style>
