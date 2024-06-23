<template>

    <!-- Project Card -->
    <v-card class="grid-item grid-item-large d-flex flex-column" hover>

        <nuxt-img v-if="project.img" :src="project.img.href" :alt="project.img.alt"></nuxt-img>

        <v-card-title class="pt-5 d-flex">

            <h2 class="text-medium-emphasis flex-grow-1">

                {{ project.title }}

            </h2>

            <v-chip v-if="project.chips" v-for="chip in project.chips" size="x-small" variant="outlined" color="warning" class="mt-3">

                {{ chip }}

            </v-chip>

        </v-card-title>

        <v-card-subtitle>

            {{ project.subTitle }}

        </v-card-subtitle>

        <v-card-text class="text-subtitle-1">

            <div v-html="project.text"></div>

        </v-card-text>

        <v-card-text class="text-subtitle-1 pt-0 pb-0">

            <div>

                <v-chip v-for="technology in project.technologies" size="small" color="secondary" class="mr-1">

                    {{ technology }}

                </v-chip>

            </div>

        </v-card-text>

        <v-card-actions>

            <v-btn v-for="link in project.links" :href="link.href" target="_blank" variant="text" color="primary">

                {{ link.title }}

            </v-btn>

        </v-card-actions>

    </v-card>

</template>

<script setup lang="ts">

    defineProps<{
        project: object
    }>()

</script>

<style scoped>

    .grid-item-large {
        grid-row: span 2;
    }

</style>
