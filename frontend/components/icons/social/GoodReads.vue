<template>

    <v-btn
        variant="text" icon :size="size"
        href="https://www.goodreads.com/mjbullman"
        target="_blank"
        class="slide-up"
        aria-label="View my GoodReads profile">

        <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 100 100" :fill="color" class="font-awesome">

            <path d="M80.285,8.888c0-1.382-0.106-2.799-0.177-4.145c-2.976,0-5.491,0-8.325,0c0,3.153,0,6.164,0,9.14   C58.427-4.751,30.937,1.13,23.214,19.693C18.29,31.56,18.538,43.534,23.71,55.26c5.455,12.363,21.113,17.606,33.406,14.099   c5.5-1.145,11.013-4.563,14.737-8.856c-0.742,9.796,0.16,22.014-10.061,27.313c-11.761,6.235-25.896,1.488-31.21-10.521   c-2.692,0-5.385,0-8.254,0c0.602,7.935,4.747,13.107,11.265,16.437c7.829,4.038,16.225,4.428,24.762,3.047   c10.876-1.771,17.996-7.9,20.476-18.775c0.886-3.861,1.381-7.864,1.381-11.832C80.391,47.076,80.32,27.982,80.285,8.888z    M70.543,48.777c-3.245,8.805-9.909,14.545-21.432,14.312c-28.688-1.126-26.808-53.6,0.992-53.386   C70.341,9.121,76.047,33.135,70.543,48.777z" />

        </svg>

    </v-btn>

</template>

<script setup lang="ts">

    // props.
    defineProps({
        size: String,
        color: String,
        width: Number,
        height: Number
    })

</script>

<style scoped>

</style>
