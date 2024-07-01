<template>

    <v-row class="mb-15">

        <page-sub-heading :sub-heading-text="'Publications'"></page-sub-heading>

        <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="">

            <v-list lines="two" aria-label="My publications">

                <v-list-item v-for="publication in publications.publications"
                    :key="publication.title" role="option" aria-selected="false">

                    <template v-slot:prepend>

                        <div class="pa-5 d-none d-sm-flex">

                            {{ publication.year }}

                        </div>

                    </template>

                    <template v-slot:title>

                        <b>
                            <i>

                                {{ publication.title }}

                            </i>

                        </b>

                    </template>

                    <template v-slot:append>

                        <v-btn v-for="link in publication.links" :href="link.href" icon
                            size="small" flat :aria-label="link.label" target="_blank"
                            class="d-none d-sm-flex">

                            <v-icon color="primary" :icon="link.icon"></v-icon>

                            <v-tooltip open-delay="300" activator="parent" location="top">

                                {{ link.title }}

                            </v-tooltip>

                        </v-btn>

                    </template>

                    <div v-html="publication.text"></div>

                    <div class="mt-2 d-sm-none">

                        <v-btn v-for="link in publication.links" :href="link.href" icon
                               size="small" flat :aria-label="link.label" target="_blank">

                            <v-icon color="primary" :icon="link.icon"></v-icon>

                            <v-tooltip open-delay="300" activator="parent" location="top">

                                {{ link.title }}

                            </v-tooltip>

                        </v-btn>

                    </div>

                </v-list-item>

            </v-list>

        </v-col>

    </v-row>

</template>

<script setup lang="ts">

    // components.
    import PageSubHeading from '~/components/headings/PageSubHeading.vue'

    // composable.
    import { usePublications } from '~/composables/publications'

    // variables.
    const publications = usePublications()

</script>

<style scoped>

</style>
