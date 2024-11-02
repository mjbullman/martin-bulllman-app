<template>

    <v-btn
        variant="text" icon :size="size"
        href="https://linkedin.com/in/mjbullman"
        target="_blank"
        class="slide-up"
        aria-label="View my LinkedIn profile">

        <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24" fill="none" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">

            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>

        </svg>

    </v-btn>

</template>

<script setup lang="ts">

    // props.
    defineProps({
        size   : String,
        color  : String,
        width  : Number,
        height : Number,
    })

</script>

<style scoped>

</style>
