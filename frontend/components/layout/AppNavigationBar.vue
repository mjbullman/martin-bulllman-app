<template>

    <v-app-bar scroll-behavior="elevate">

        <!-- logo -->
        <v-app-bar-title>

            <NuxtLink to="/">

                <!-- show icon on small devices -->
                <nuxt-img src="/img/icon.svg" width="50" class="mt-2" role="link" alt="Martin Bullman Logo"></nuxt-img>

            </NuxtLink>

        </v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- links -->
        <div class="nav d-none d-md-flex">

            <v-btn to="/about">About</v-btn>

            <v-btn to="/projects">Projects</v-btn>

            <v-btn to="/contact">Contact</v-btn>

        </div>

        <v-spacer></v-spacer>

        <!-- settings & resume -->
        <template v-slot:append>

            <!-- change theme -->
            <theme></theme>

            <!-- download resume -->
            <!--<resume></resume>-->

            <!-- toggle mobile menu -->
            <v-menu>

                <template v-slot:activator="{ props }">

                    <v-btn v-bind="props" icon size="small" class="d-md-none">

                        <v-icon v-bind="props" color="primary" icon="fa-solid fa-bars" aria-label="open navigation menu"></v-icon>

                    </v-btn>

                </template>

                <v-list>

                    <v-list-item to="/about" link>

                        <v-list-item-title>About</v-list-item-title>

                    </v-list-item>

                    <v-list-item to="/projects" link>

                        <v-list-item-title>Projects</v-list-item-title>

                    </v-list-item>

                    <v-list-item to="/contact" link>

                        <v-list-item-title>Contact</v-list-item-title>

                    </v-list-item>

                </v-list>

            </v-menu>

        </template>

    </v-app-bar>

</template>

<script setup lang="js">

    import Theme  from '~/components/buttons/Theme.vue'
    import Resume from '~/components/buttons/Resume.vue'

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

</style>
