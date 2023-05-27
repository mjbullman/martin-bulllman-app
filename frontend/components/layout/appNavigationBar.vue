<template>

    <v-app-bar scroll-behavior="elevate">

        <!-- logo -->
        <v-app-bar-title >

            <a href="/">

                <v-img src="/img/logo.svg" width="220"></v-img>

            </a>

        </v-app-bar-title>


        <!-- links -->
        <div>

            <v-btn href="/projects">Projects</v-btn>

            <v-btn href="/blog">Blog</v-btn>

            <v-btn href="/contact">Contact</v-btn>

        </div>

        <v-spacer></v-spacer>

        <!-- options -->
        <template v-slot:append>

            <!-- toggle dark mode -->
            <theme-toggle></theme-toggle>

            <!-- toggle mobile menu -->
            <v-menu left bottom class="d-none">

                <template v-slot:activator="{ on, attrs }">

                    <v-btn icon size="small" v-bind="attrs" v-on="on">

                        <v-icon color="primary" icon="fa-solid fa-bars"></v-icon>

                    </v-btn>

                </template>

            </v-menu>

        </template>

    </v-app-bar>

</template>

<script setup>

    import ThemeToggle from '~/components/buttons/themeToggle.vue';

</script>

<style scoped>

</style>
