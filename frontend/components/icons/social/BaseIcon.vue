<template>

    <v-btn
        variant="text"
        icon
        :size="size"
        :href="href"
        target="_blank"
        class="slide-up"
        :aria-label="label">

        <!-- default slot for custom SVG content -->
        <slot></slot>

    </v-btn>

</template>

<script setup lang="ts">

    defineProps({
        size: { type: String, default: 'medium' },
        href: { type: String, required: true },
        label: { type: String, required: true }
    })

</script>

<style scoped>

    .slide-up {
        transition: transform 0.3s ease-in-out;
    }

    .slide-up:hover {
        transform: translateY(-5px);
    }

</style>
