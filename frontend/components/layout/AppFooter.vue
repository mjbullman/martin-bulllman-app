<template>

    <v-container class="section-padding">

        <v-row>

            <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center">

                <git-hub :size="'large'" :width="30" :height="30" :color="'#B9B9B9'"></git-hub>

                <linked-in :size="'large'" :width="30" :height="30" :color="'#B9B9B9'"></linked-in>

                <instagram :size="'large'" :width="30" :height="30" :color="'#B9B9B9'"></instagram>

                <facebook :size="'large'" :width="30" :height="30" :color="'#B9B9B9'"></facebook>

                <twitter :size="'large'" :width="28" :height="28" :color="'#B9B9B9'"></twitter>

                <spotify :size="'large'" :width="35" :height="35" :color="'#B9B9B9'"></spotify>

                <good-reads :size="'large'" :width="30" :height="30" :color="'#B9B9B9'"></good-reads>

            </v-col>

            <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center text-primary">

                Designed and developed by Martin Bullman {{ year }} &copy;

            </v-col>

            <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center text-primary pt-0">

                The frontend is developed using

                <NuxtLink to="https://vuejs.org/" target="_blank" aria-label="VueJS (opens a new tab)" class="link">Vue.js</NuxtLink>,
                <NuxtLink to="https://vuetifyjs.com/en/" target="_blank" aria-label="Vuetify (opens a new tab)" class="link">Vuetify</NuxtLink>

                and

                <NuxtLink to="https://nuxt.com/" target="_blank" aria-label="NuxtJS (opens a new tab)" class="link">Nuxt.js</NuxtLink>,

                while the backend is powered by the

                <NuxtLink to="https://www.djangoproject.com/" target="_blank" aria-label="Django (opens a new tab)" class="link">Django</NuxtLink> framework.

            </v-col>

        </v-row>

    </v-container>

    <div class="spacer end"></div>

</template>

<script setup lang="ts">

    // components.
    import GitHub    from '~/components/icons/social/GitHub.vue'
    import Twitter   from '~/components/icons/social/Twitter.vue'
    import Spotify   from '~/components/icons/social/Spotify.vue'
    import Facebook  from '~/components/icons/social/Facebook.vue'
    import LinkedIn  from '~/components/icons/social/LinkedIn.vue'
    import Instagram from '~/components/icons/social/Instagram.vue'
    import GoodReads from '~/components/icons/social/GoodReads.vue'

    // variables.
    let year = new Date().getFullYear();

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

    .end {
        background-image: url("../../public/img/backgrounds/coloured.svg");
    }

</style>
