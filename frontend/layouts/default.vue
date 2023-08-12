<template>

    <v-app>

        <!-- main navigation -->
        <app-navigation-bar></app-navigation-bar>

        <!-- main body -->
        <app-main></app-main>

    </v-app>

</template>

<script setup lang="ts">

    import AppMain          from '~/components/layout/appMain.vue';
    import AppNavigationBar from '~/components/layout/appNavigationBar.vue';

</script>
