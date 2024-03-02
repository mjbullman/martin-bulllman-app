<template>

    <v-container fluid>

        <page-heading heading-text="About"></page-heading>

        <v-container>

            <v-row>

                <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="text-center">

                    <nuxt-img src="/img/personal/martin_hektor_container_hotel.webp" width="300px" alt="Martin at Hektor Container Hotel"></nuxt-img>

                </v-col>

                <v-col cols="12" sm="12" md="8" lg="8" xl="8" class="text-center">

                    <div class="grid-container">

                        <div class="text-h3 text-medium-emphasis mb-10">

                            I'm a software engineer working remotely from {{ weather ? weather.current.temp_c : 0 }}&deg;C
                            Tallinn, Estonia.

                        </div>

                        <div class="text-h6 mb-5">

                            Experienced Senior Software Engineer with nearly a decade of hands-on experience in
                            conceptualizing, building, and refining software solutions.

                        </div>

                        <div class="text-h6">

                            Currently serving as the CTO at QuickMinutes, I bring a highly ambitious and
                            performance-driven approach to my role.
                        </div>

                    </div>

                </v-col>

            </v-row>

        </v-container>

        <!-- work history timeline -->
        <work-history-timeline></work-history-timeline>

    </v-container>

</template>

<script setup lang="ts">

    import PageHeading         from '~/components/general/PageHeading.vue'
    import WorkHistoryTimeline from '~/components/timelines/WorkHistoryTimeline.vue'

    const runtimeConfig = useRuntimeConfig()

    const { data: weather } = useFetch(runtimeConfig.public.apiBaseUrl + '/weather/current')

</script>

<style scoped>

</style>
