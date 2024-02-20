<template>

    <v-container fluid>

        <page-heading heading-text="About"></page-heading>

        <v-container>

            <v-row>

                <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="text-center">

                    <div class="grid-container">

                        <div class="text-h4 text-medium-emphasis mb-10">

                            I'm a software engineer working remotely from {{ temperature }}&deg;C
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

    import { useConfig } from '~/composables/config'

    let temperature = ref(0)

    const config = useConfig()

    await useFetch(config.apiUrl.value + '/weather/current', {
        onResponse({ request, response, options }) {
            temperature = response._data.current.temp_c
        },
        onResponseError({ request, response, options }) {
            console.log(response)
        }
    })

</script>

<style scoped>

</style>
