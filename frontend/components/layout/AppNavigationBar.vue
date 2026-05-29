<template>

    <v-app-bar scroll-behavior="elevate">

        <!-- logo -->
        <v-app-bar-title>

            <NuxtLink to="/">

                <nuxt-img
                    src="/img/icon.svg"
                    width="50"
                    height="50"
                    class="mt-2"
                    role="link"
                    alt="Martin Bullman Logo">
                </nuxt-img>

            </NuxtLink>

        </v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- desktop links -->
        <div class="nav d-none d-sm-flex" aria-hidden="true">

            <v-btn to="/about" tabindex="-1" class="gradient-outline">
                About
            </v-btn>

            <v-btn to="/projects" tabindex="-1" class="gradient-outline">
                Projects
            </v-btn>

            <v-btn to="/contact" tabindex="-1" class="gradient-outline">
                Contact
            </v-btn>

        </div>

        <v-spacer></v-spacer>

        <template #append>

            <!-- change theme -->
            <theme></theme>

            <!-- toggle mobile drawer -->
            <v-btn
                icon
                class="d-sm-none"
                aria-label="open navigation menu"
                @click="store.toggleMobileNavigationDrawer()">

                <v-icon color="primary" icon="fa-solid fa-bars"></v-icon>

            </v-btn>

        </template>

    </v-app-bar>

</template>

<script setup lang="ts">

    // components.
    import Theme from '~/components/buttons/Theme.vue'

    // store.
    import { useSettingsStore } from '~/stores/settings'

    // state.
    const store = useSettingsStore()

</script>

<style scoped>

    .v-toolbar-title {
        flex: unset;
        width: 200px;
    }

    :deep(.v-toolbar__append) {
        width: 200px;
        justify-content: flex-end;
    }

    .gradient-outline {
        background: linear-gradient(to right, #2196F3, #02E8CA) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
    }

</style>
