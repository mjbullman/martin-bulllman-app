<template>

    <!-- Project Card -->
    <v-card class="d-flex flex-column item" :class="'item' + project.id">

        <nuxt-img v-if="project.img" :src="project.img.href" :alt="project.img.alt" height=""></nuxt-img>

        <v-card-title class="pt-5 d-flex">

            <h2 class="text-medium-emphasis flex-grow-1">

                {{ project.title }}

            </h2>

            <span v-if="project.chips">

                <v-chip
                    v-for="chip in project.chips"
                    :key="chip" size="x-small" variant="outlined"
                    color="warning" class="mt-3">

                    {{ chip }}

                </v-chip>

            </span>

        </v-card-title>

        <v-card-subtitle>

            {{ project.subTitle }}

        </v-card-subtitle>

        <v-card-text class="text-subtitle-1" v-html="project.text">

        </v-card-text>

        <v-card-text class="text-subtitle-1 pt-0 pb-0">

            <div>

                <v-chip
                    v-for="technology in project.technologies"
                    :key="technology" size="small" color="secondary"
                    class="mr-1">

                    {{ technology }}

                </v-chip>

            </div>

        </v-card-text>

        <v-card-actions>

            <v-btn
                v-for="link in project.links"
                :key="link.title"
                :href="link.href"
                color="primary" target="_blank" variant="text">

                {{ link.title }}

            </v-btn>

        </v-card-actions>

    </v-card>

</template>

<script setup lang="ts">

    // props.
    import type { Project } from '~/types/project'

    defineProps<{
        project: Project
    }>()

</script>

<style scoped>

    .item1, .item3, .item4, .item7, .item9 {
        grid-row: span 20;
    }

    .item2, .item5, .item6, .item8, .item10, .item11, .item12, .item13 {
        grid-row: span 12;
    }

</style>
