<template>

    <v-btn
        variant="text" icon :size="size"
        href="https://twitter.com/mjbullman"
        target="_blank"
        class="slide-up"
        aria-label="View my Twitter X profile">

        <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 512 512" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

            <path class="font-awesome" fill="#b9b9b9" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>

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
