<template>

    <v-btn
        variant="text" icon :size="size"
        href="https://facebook.com/mjbullman"
        target="_blank"
        class="slide-up"
        aria-label="View my Facebook profile">

        <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24" fill="none" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">

            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>

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
