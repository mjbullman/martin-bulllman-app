<template>

    <BaseIcon
        :href="'https://open.spotify.com/user/martinbullman'"
        :label="'View my Spotify profile'"
        :size="'large'">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            :width="width"
            :height="height"
            viewBox="0 0 512 512"
            :stroke="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">

            <path class="font-awesome" fill="#b9b9b9" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />

        </svg>

    </BaseIcon>

</template>

<script setup lang="ts">

    import BaseIcon from '~/components/icons/social/BaseIcon.vue'

    defineProps({
        size: { type: String, default: 'large' },
        color: { type: String, default: '#1DB954' }, // Default Spotify green
        width: { type: Number, default: 30 },
        height: { type: Number, default: 30 }
    })

</script>

<style scoped>

</style>
