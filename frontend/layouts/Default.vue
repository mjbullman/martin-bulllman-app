<template>

    <!-- vuetify application wrapper -->
    <v-app>

        <!-- application navigation -->
        <app-navigation-bar></app-navigation-bar>

        <!-- application routes render -->
        <app-main></app-main>

        <!-- application mobile navigation -->
        <app-mobile-navigation-bar></app-mobile-navigation-bar>

        <!-- application footer -->
        <app-footer></app-footer>

        <!-- snack notifications -->
        <snack-bar></snack-bar>

    </v-app>

</template>

<script setup lang="ts">

    // components.
    import AppMain from '~/components/layout/AppMain.vue'
    import SnackBar from '~/components/snackbars/SnackBar.vue'
    import AppFooter from '~/components/layout/AppFooter.vue'
    import AppNavigationBar from '~/components/layout/AppNavigationBar.vue'
    import AppMobileNavigationBar from '~/components/layout/AppMobileNavigationBar.vue'

</script>
