<template>

    <v-container>

            <v-row>

                <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="pt-5 pb-5 pt-md-12 pb-md-12">

                    <h1 class="text-h3 text-gradient-animation text-md-h1 pb-5 text-center font-weight-bold">

                        {{ props.headingText }}

                    </h1>

                </v-col>

            </v-row>

        </v-container>

</template>

<script setup lang="ts">

    // props.
    const props = defineProps<{
        headingText?: String
    }>()

</script>

<style scoped>

</style>
