<template>

    <!-- vuetify application wrapper -->
    <v-app>

        <!-- application navigation -->
        <app-navigation-bar></app-navigation-bar>

        <!-- application routes render -->
        <app-main></app-main>

        <!-- snack notifications -->
        <snack-bar></snack-bar>

    </v-app>

</template>

<script setup lang="ts">

    import AppMain          from '~/components/layout/AppMain.vue'
    import SnackBar         from '~/components/snackbars/SnackBar.vue'
    import AppNavigationBar from '~/components/layout/AppNavigationBar.vue'

</script>
