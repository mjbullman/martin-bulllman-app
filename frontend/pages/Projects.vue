<template>

    <v-container fluid class="pa-0">

        <page-heading heading-text="Projects"></page-heading>

        <v-container fluid class="pa-0">

            <v-row>

                <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center">

                    <div class="masonry">

                        <!-- Projects List -->
                        <project-card
                            v-for="(project) in projects.projects"
                            :key="project.id"
                            :project="project">
                        </project-card>

                    </div>

                </v-col>

            </v-row>

        </v-container>

    </v-container>

</template>

<script setup lang="ts">

    // components.
    import ProjectCard from '~/components/cards/ProjectCard.vue'
    import PageHeading from '~/components/headings/PageHeading.vue'

    // composable.
    import { useProjects } from '~/composables/projects'

    // variables.
    const projects = useProjects()

</script>

<style scoped>

    .item {
        box-sizing: border-box;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        transition: transform .6s;
        font-size: 1.2em;
        height: auto;
    }

    .item:hover {
        transform: translateY(-10px);
    }

    .item1, .item3, .item4, .item7, .item9 {
        grid-row: span 20;
    }

    .item2, .item5, .item6, .item8, .item10, .item11, .item12, .item13 {
        grid-row: span 12;
    }

</style>
