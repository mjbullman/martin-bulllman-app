<template>

    <v-container class="section-padding">

        <v-row>

            <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center">

                <!-- list social media icons -->
                <template v-for="(icon, index) in socialIcons" :key="index">

                    <component
                        :is="icon.component"
                        :size="'large'"
                        :width="icon.width"
                        :height="icon.height"
                        :color="'#B9B9B9'"
                        @click="trackSocialClick"
                    />

                </template>

            </v-col>

            <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center text-primary">

                Designed and developed by Martin Bullman {{ year }} &copy;

            </v-col>

            <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center text-primary pt-0">

                The frontend is developed using

                <NuxtLink
                    to="https://vuejs.org/"
                    target="_blank"
                    aria-label="VueJS (opens a new tab)"
                    class="text-decoration-none text-grey link">

                    Vue.js

                </NuxtLink>

                <NuxtLink
                    to="https://vuetifyjs.com/en/"
                    target="_blank"
                    aria-label="Vuetify (opens a new tab)"
                    class="text-decoration-none text-grey link">

                    Vuetify

                </NuxtLink>

                <NuxtLink
                    to="https://nuxt.com/"
                    target="_blank"
                    aria-label="NuxtJS (opens a new tab)"
                    class="text-decoration-none text-grey link">

                    Nuxt.js

                </NuxtLink>

                while the backend is powered by the

                <NuxtLink
                    to="https://www.djangoproject.com/"
                    target="_blank"
                    aria-label="Django (opens a new tab)"
                    class="text-decoration-none text-grey link">

                    Django

                </NuxtLink> framework.

            </v-col>

        </v-row>

    </v-container>

    <div class="spacer graphic"></div>

</template>

<script setup lang="ts">

    // components.
    import GitHub from '~/components/icons/social/GitHub.vue'
    import Twitter from '~/components/icons/social/Twitter.vue'
    import Spotify from '~/components/icons/social/Spotify.vue'
    import Facebook from '~/components/icons/social/Facebook.vue'
    import LinkedIn from '~/components/icons/social/LinkedIn.vue'
    import Instagram from '~/components/icons/social/Instagram.vue'
    import GoodReads from '~/components/icons/social/GoodReads.vue'
    // import HackTheBox from '~/components/icons/social/HackTheBox.vue'

    // constants.
    import { MixpanelEvents } from '~/constants/mixpanelEvents'

    // composables.
    import { useMixpanel } from '~/composables/mixpanel'

    // variables.
    const year = new Date().getFullYear()
    const { track } = useMixpanel()

    // social media icons.
    const socialIcons = [
        { component: GitHub, name: 'Github', width: 30, height: 30 },
        // { component: HackTheBox, name: 'HackTheBox', width: 28, height: 28 },
        { component: LinkedIn, name: 'LinkedIn', width: 30, height: 30 },
        { component: Instagram, name: 'Instagram', width: 30, height: 30 },
        { component: Facebook, name: 'Facebook', width: 30, height: 30 },
        { component: Twitter, name: 'Twitter', width: 28, height: 28 },
        { component: Spotify, name: 'Spotify', width: 35, height: 35 },
        { component: GoodReads, name: 'GoodReads', width: 30, height: 30 }
    ]

    // track social media clicks.
    function trackSocialClick () {
        track(MixpanelEvents.SOCIAL_VIEW)
    }
</script>

<style scoped>

    .spacer {
        aspect-ratio: 900/120;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin-top: 10px;
    }

    .graphic {
        background-image: url('../../public/img/backgrounds/coloured.svg');
    }

</style>
