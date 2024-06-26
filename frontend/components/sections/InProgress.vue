<template>

    <v-row class="mb-15">

        <page-sub-heading :sub-heading-text="'In Progress'"></page-sub-heading>

        <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center">

            <div class="masonry">

                <!-- Projects List -->
                <project-card :project="projects.projects[0]" class="item"></project-card>

                <project-card :project="projects.projects[2]" class="item"></project-card>

            </div>

        </v-col>

        <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center">

            <v-btn variant="outlined" color="primary">

                All Projects

            </v-btn>

        </v-col>

    </v-row>

</template>

<script setup lang="ts">

    import ProjectCard    from '~/components/cards/ProjectCard.vue'
    import PageSubHeading from '~/components/headings/PageSubHeading.vue'

    import { useProjects }   from '~/composables/projects'
    import { useAnimations } from '~/composables/animations'

    const projects   = useProjects()
    const animations = useAnimations()

</script>

<style scoped>
    
    @media only screen and (min-width: 1920px) {
        .masonry {
            grid-template-columns: repeat(auto-fill, minmax(min(100%, 600px), 1fr));
        }
    }

</style>
