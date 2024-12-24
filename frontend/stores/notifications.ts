import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotifications = defineStore('notifications', () => {
    // state
    const snackbarData = ref(null)

    // actions
    function updateSnackbarData (payload: never) {
        snackbarData.value = payload
    }

    function close () {
        snackbarData.value = null
    }

    return { snackbarData, updateSnackbarData, close }
})
