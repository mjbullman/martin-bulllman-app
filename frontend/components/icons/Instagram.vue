<template>

    <v-btn
        variant="text" icon :size="size"
        href="https://instagram.com/mjbullman"
        target="_blank"
        class="slide-up"
        aria-label="View my Instagram profile">

        <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24" fill="none" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">

            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>

        </svg>

    </v-btn>

</template>

<script setup lang="ts">

    defineProps({
        size   : String,
        color  : String,
        width  : Number,
        height : Number,
    })

</script>

<style scoped>

</style>
