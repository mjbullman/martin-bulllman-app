<template>

    <v-container class="fill-height">

        <v-row class="d-flex flex-column flex-sm-row align-content-space-between flex-al mt-5 mt-md-0" justify="center" align="center">

            <v-col class="text-center text-sm-left">

                <h1 class="text-h4 text-md-h2">Hi, I'm Martin</h1>

                <h3 class="text-h6 text-md-h4 text-medium-emphasis">FullStack Developer & Crypto Enthusiast</h3>

            </v-col>

            <v-col>

                <nuxt-img :src="settings.darkMode ? '/img/web_app/developer_developing_dark.svg' : '/img/web_app/developer_developing_light.svg'" alt="Developer working at his desk"></nuxt-img>

            </v-col>

        </v-row>

    </v-container>

</template>

<script setup lang="ts">

    import { useSettingsStore } from '@/stores/settings';

    const settings = useSettingsStore();

</script>

<style scoped>

</style>
