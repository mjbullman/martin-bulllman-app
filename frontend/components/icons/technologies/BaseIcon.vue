<template>

    <div class="technology-icon-container text-center">

        <svg viewBox="0 0 128 128" width="75" height="75" class="technology-icon-svg">

            <slot></slot>

        </svg>

        <div v-if="label" class="technology-icon-text font-weight-bold">

            {{ label }}

        </div>

    </div>

</template>

<script setup lang="ts">

    // props.
    defineProps({
        label: { type: String, default: '' }
    });

</script>

<style scoped>
</style>
