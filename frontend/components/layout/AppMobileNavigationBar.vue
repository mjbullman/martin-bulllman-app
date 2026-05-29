<template>

    <v-navigation-drawer
        v-model="store.mobileNavigationDrawer"
        temporary
        location="right">

        <v-list nav>

            <v-list-item to="/about" @click="store.toggleMobileNavigationDrawer()">

                <template #prepend>
                    <v-icon
                        color="primary"
                        icon="fa-regular fa-address-card" 
                        size="small" 
                        class="mr-3">
                    </v-icon>
                </template>

                <v-list-item-title>About</v-list-item-title>

            </v-list-item>

            <v-list-item to="/projects" @click="store.toggleMobileNavigationDrawer()">

                <template #prepend>
                    <v-icon
                        color="primary"
                        icon="fa-solid fa-code" 
                        size="small" 
                        class="mr-3">
                    </v-icon>
                </template>

                <v-list-item-title>Projects</v-list-item-title>

            </v-list-item>

            <v-list-item to="/contact" @click="store.toggleMobileNavigationDrawer()">

                <template #prepend>
                    <v-icon 
                        color="primary" 
                        icon="fa-regular fa-envelope" 
                        size="small" 
                        class="mr-3">
                    </v-icon>
                </template>

                <v-list-item-title>Contact</v-list-item-title>

            </v-list-item>

        </v-list>

    </v-navigation-drawer>

</template>

<script setup lang="ts">

    // store.
    import { useSettingsStore } from '~/stores/settings'

    const store = useSettingsStore()

</script>
