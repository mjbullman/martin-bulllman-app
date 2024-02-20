<template>

    <v-container>

        <v-row class="text-center" align="center" justify="center" style="height: 90vh">

            <v-col>

                <h1 class="text-h2 text-md-h1 ma-5" v-motion="animations.fadeUp.value">

                    Hi, I'm <span class="text-gradient-animation ">Martin</span>

                </h1>

                <h3 class="text-h6 text-md-h4 text-medium-emphasis ma-5" v-motion-pop-visible>

                    Software Engineer & Full Stack Developer

                </h3>

                <div class="ma-5" v-motion-pop-visible>

                    Crafting innovative solutions for a digital world

                </div>

                <music-waves v-motion-slide-visible-once-bottom></music-waves>

            </v-col>

        </v-row>

    </v-container>

</template>

<script setup lang="ts">

    import {onMounted} from 'vue'

    // imports.
    import { useSettingsStore } from '@/stores/settings';

    // state.
    const settings = useSettingsStore();

    import { useConfig } from '~/composables/config'
    import MusicWaves from '~/components/music/MusicWaves.vue'

    import { useAnimations } from '~/composables/animations'

    const animations = useAnimations()

    const config = useConfig()

    onMounted(() => {
        const {data, error, pending, refresh } = useFetch(config.apiUrl.value + '/spotify/currently_playing', {
            onResponse({ request, response, options }) {

                console.log(response._data)

            },
            onResponseError({ request, response, options }) {
                console.log(response)
            }
        })

        console.log(data.value)
        console.log(error.value)
    })

</script>

<style scoped>

</style>
