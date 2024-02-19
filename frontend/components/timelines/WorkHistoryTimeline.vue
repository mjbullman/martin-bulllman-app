<template>

    <v-container fluid>

        <v-row>

            <v-col cols="12" sm="12" md="12" lg="12" xl="12">

                <v-timeline align="start">

                    <v-timeline-item
                        v-for="(job, i) in jobs"
                        :key="i"
                        dot-color="text-primary"
                        size="small">

                        <template v-slot:opposite>

                            <div class="pt-1 headline" :class="i % 2 == 0 ? 'text-primary' : 'text-secondary'" v-text="job.year"></div>

                        </template>

                        <div :class="'timeline-element-' + i">

                            <h2 class="mt-n1 headline mb-4" :class="i % 2 == 0 ? 'text-primary' : 'text-secondary'">

                                {{ job.title }}

                            </h2>

                            <h4 class="mt-n1 font-weight-light mb-4" :class="i % 2 == 0 ? 'text-primary' : 'text-secondary'">

                                {{ job.company }}

                            </h4>

                            <div>

                                {{ job.text }}

                            </div>

                        </div>

                    </v-timeline-item>

                </v-timeline>

            </v-col>

        </v-row>

    </v-container>

</template>

<script setup lang="ts">

    import { computed } from 'vue'

    let colorClass = computed(() => {

    })

    const jobs = ref([
        {
            company: 'QuickMinutes',
            title: 'Chief Technology Officer',
            year: 'Oct 2020 - Present',
        },
        {
            company: 'Taoglas',
            title: 'Senior Software Engineer',
            year: 'Jun 2019 - Nov 2023',
        },
        {
            company: 'QuickMinutes',
            title: 'Senior Software Engineer',
            year: 'June 2018 - Sep 2020',
        },
        {
            company: 'TechSquad',
            title: 'Blockchain Developer',
            year: 'Apr 2017 - May 2022',
        },
        {
            company: 'QuickMinutes',
            title: 'Software Engineer',
            year: 'May 2016 - Apr 2018',
        },
        {
            company: 'ThinkSmarter Analytics',
            title: 'Software Engineer',
            year: 'Apr 2015 - May 2019',
        },
        {
            company: 'Intel',
            title: 'Product Application Engineer',
            year: 'Apr 2015 - Sep 2015',
        },
        {
            company: 'Insight SFI Centre for Data Analytics',
            title: 'Research Inter',
            year: 'Jun 2014 - Sep 2014',
        },
        {
            company: 'University College Cork',
            title: 'Lab Demonstrator',
            year: 'Sep 2013 - Sep 2014',
        },
    ])

</script>

<style scoped>

    .timeline-element-1, .timeline-element-3, .timeline-element-5, .timeline-element-7 {
        text-align: right;
    }

</style>
