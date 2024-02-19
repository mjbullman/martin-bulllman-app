<template>

    <div class="loader ma-5">

        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>

    </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

    .loader {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loader .bar {
        display: block;
        position: relative;
        background: linear-gradient(
            0deg,
            rgb(var(--v-theme-primary)),
            rgb(var(--v-theme-secondary))
        );
        height: 100%;
        width: 10px;
        border-radius: 50px;
        margin: 0 5px;
        animation: animate 1.2s linear infinite;
    }
    
    @keyframes animate {
        50% {
            height: 20%;
        }
        100% {
            height: 100%;
        }
    }

    .bar:nth-child(1) {
        animation-delay: 0s;
    }

    .bar:nth-child(2) {
        animation-delay: 0.3s;
    }

    .bar:nth-child(3) {
        animation-delay: 0.6s;
    }

    .bar:nth-child(4) {
        animation-delay: 0.9s;
    }

    .bar:nth-child(5) {
        animation-delay: 0.6s;
    }

    .bar:nth-child(6) {
        animation-delay: 0.3s;
    }

    .bar:nth-child(1) {
        animation-delay: 0s;
    }




</style>
