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

        <template #actions>

            <v-btn
                icon="mdi mdi-close-circle-outline"
                @click="notification.close()">
            </v-btn>

        </template>

    </v-snackbar>

</template>

<script setup>

    // store.
    import { useNotifications } from '~/stores/notifications'

    // composable.
    const notification = useNotifications()

</script>

<style scoped>

</style>
