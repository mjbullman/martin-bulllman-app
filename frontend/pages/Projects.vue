<template>

    <v-container fluid class="pa-0">

        <page-heading heading-text="Projects"></page-heading>

        <v-container fluid class="pa-0">

            <v-row>

                <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center">

                    <div class="masonry">

                        <!-- Projects List -->
                        <project-card v-for="(project) in projects.projects" :project="project"></project-card>

                    </div>

                </v-col>

            </v-row>

        </v-container>

    </v-container>

</template>

<script setup lang="ts">

    import ProjectCard from '~/components/cards/ProjectCard.vue'
    import PageHeading from '~/components/headings/PageHeading.vue'

    import { useProjects }   from '~/composables/projects'
    import { useAnimations } from '~/composables/animations'

    const projects   = useProjects()
    const animations = useAnimations()

</script>

<style scoped>

</style>
