<template>

    <!-- vuetify application wrapper -->
    <v-app>

        <!-- application navigation -->
        <app-navigation-bar></app-navigation-bar>

        <!-- application routes render -->
        <app-main></app-main>

    </v-app>

</template>

<script setup lang="ts">

    import AppMain          from '~/components/layout/appMain.vue';
    import AppNavigationBar from '~/components/layout/appNavigationBar.vue';

</script>
