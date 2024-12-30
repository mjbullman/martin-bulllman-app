<template>

    <BaseIcon
        :href="'https://instagram.com/mjbullman'"
        :label="'View my Instagram profile'"
        :size="'large'">

        <!-- SVG content for the Instagram icon -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            :width="width"
            :height="height"
            viewBox="0 0 24 24"
            fill="none"
            :stroke="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github">

            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>

        </svg>

    </BaseIcon>

</template>

<script setup lang="ts">

    import BaseIcon from '~/components/icons/social/BaseIcon.vue'

    defineProps({
        size: { type: String, default: 'large' },
        color: { type: String, default: '#000' },
        width: { type: Number, default: 30 },
        height: { type: Number, default: 30 }
    })

</script>

<style scoped>
</style>
