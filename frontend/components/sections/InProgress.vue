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

    .masonry {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));
        grid-template-rows: masonry;
        gap: 20px;
        padding: 15px;
    }

    .item {
        box-sizing: border-box;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        transition: transform 0.3s;
        font-size: 1.2em;
        height: auto;
    }

    .item:hover {
        transform: translateY(-5px);
    }
    
    @media only screen and (min-width: 1920px) {
        .masonry {
            grid-template-columns: repeat(auto-fill, minmax(min(100%, 600px), 1fr));
        }
    }

</style>
