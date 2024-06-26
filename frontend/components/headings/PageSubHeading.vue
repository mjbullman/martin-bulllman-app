<template>

    <v-container>

        <v-row>

            <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="">

                <h1 class="text-h3 pb-5 text-center text-gradient-animation">

                    {{ props.subHeadingText }}

                </h1>

            </v-col>

        </v-row>

    </v-container>

</template>

<script setup lang="ts">

    const props = defineProps<{
        subHeadingText?: String
    }>()

</script>

<style scoped>

</style>
