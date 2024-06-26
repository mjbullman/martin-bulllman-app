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
        transform: translateY(-10px);
    }

    .item1 { grid-row: span 20;  }
    .item2 { grid-row: span 12;  }
    .item3 { grid-row: span 20;  }
    .item4 { grid-row: span 20;  }
    .item5 { grid-row: span 12;  }
    .item6 { grid-row: span 12;  }
    .item7 { grid-row: span 20;  }
    .item8 { grid-row: span 12; }
    .item9 { grid-row: span 12;  }
    .item10 { grid-row: span 12; }
    .item11 { grid-row: span 12; }

</style>
