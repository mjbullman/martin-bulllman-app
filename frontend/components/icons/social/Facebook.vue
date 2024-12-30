<template>

    <BaseIcon
        :href="'https://facebook.com/mjbullman'"
        :label="'View my Facebook profile'"
        :size="'large'">

        <!-- SVG content for the Facebook icon -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            :width="width"
            :height="width"
            viewBox="0 0 24 24"
            fill="none"
            :stroke="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" class="feather">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
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
