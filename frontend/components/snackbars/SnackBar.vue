<template>

    <v-snackbar
        v-if="notification.snackbarData"
        v-model="notification.snackbarData.toggle"
        :color="notification.snackbarData.color"
        :variant="notification.snackbarData.variant"
        :timeout="notification.snackbarData.timeout"
        :location="notification.snackbarData.location"
        :close-delay="notification.snackbarData.closeDelay"
        :multi-line="notification.snackbarData.multiLine">

        {{ notification.snackbarData.text }}

        <template v-slot:actions>

            <v-btn
                @click="notification.close()"
                icon="mdi mdi-close-circle-outline">
            </v-btn>

        </template>

    </v-snackbar>

</template>

<script setup>

    import { useNotifications } from '~/stores/notifications'

    const notification = useNotifications()

</script>

<style scoped>

</style>
