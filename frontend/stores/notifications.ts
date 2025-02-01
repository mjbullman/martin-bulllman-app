import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SnackbarData } from '~/types/snackNotification'

export const useNotifications = defineStore('notifications', () => {
    // state
    const snackbarData = ref<SnackbarData | null>(null)

    // actions
    function updateSnackbarData (payload: SnackbarData) {
        snackbarData.value = payload
    }

    function close () {
        snackbarData.value = null
    }

    return { snackbarData, updateSnackbarData, close }
})
