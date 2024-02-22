<template>

    <v-app-bar scroll-behavior="elevate">

        <!-- logo -->
        <v-app-bar-title>

            <nuxt-link to="/">

                <nuxt-img src="/img/logo.svg" width="200" class="mt-2" role="link" alt="Martin Bullman Logo"></nuxt-img>

            </nuxt-link>

        </v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- links -->
        <div class="nav d-none d-md-flex">

            <v-btn to="/about">About</v-btn>

            <v-btn to="/projects">Projects</v-btn>

            <v-btn to="/contact">Contact</v-btn>

        </div>

        <v-spacer></v-spacer>

        <!-- options -->
        <template v-slot:append>

            <!-- toggle dark mode -->
            <theme-toggle></theme-toggle>

            <!-- toggle mobile menu -->
            <v-menu>

                <template v-slot:activator="{ props }">

                    <v-btn v-bind="props" icon size="small">

                        <v-icon v-bind="props" color="primary" icon="fa-solid fa-bars"></v-icon>

                    </v-btn>

                </template>

                <v-list>

                    <v-list-item>

                        <v-list-item-title>Martin Bullman</v-list-item-title>

                    </v-list-item>

                </v-list>

            </v-menu>

        </template>

    </v-app-bar>

</template>

<script setup lang="js">

    import ThemeToggle from '~/components/buttons/ThemeToggle.vue'

</script>

<style scoped>

    .v-toolbar-title {
        flex: unset;
        width: 200px;
    }



</style>
