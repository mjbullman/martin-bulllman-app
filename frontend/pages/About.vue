<template>

    <v-container fluid class="pa-0">

        <page-heading heading-text="About"></page-heading>

        <v-container>

            <v-row>

                <v-col cols="12" sm="12" md="4" lg="5" xl="5" class="text-center">

                    <nuxt-img src="/img/personal/martin_hektor_container_hotel.webp" width="300px" alt="Martin at Hektor Container Hotel"></nuxt-img>

                </v-col>

                <v-col cols="12" sm="12" md="8" lg="7" xl="7" class="text-center">

                    <h2 class="text-h4 text-medium-emphasis mb-10">

                        Welcome to my digital corner! I'm Martin, a Software Engineer crafting code and solutions
                        from {{ weather ? weather.current.temp_c : 0 }}&deg;C Tallinn, Estonia

                    </h2>

                    <div class="mb-5">

                        From a young age, I was captivated by the infinite possibilities that technology presented.
                        What began as a curiosity quickly blossomed into a full-fledged passion as I delved deeper
                        into the world of software development. Over the years, I've honed my skills, embracing
                        new technologies and methodologies to stay at the forefront of this dynamic field.

                    </div>

                    <div>

                        With a foundation built on a diverse array of programming languages and frameworks, I thrive
                        on tackling complex problems head-on. Whether it's crafting elegant algorithms, architecting
                        scalable systems, or optimizing user experiences, I approach each challenge with creativity,
                        precision, and a relentless pursuit of excellence.

                    </div>

                </v-col>

            </v-row>

            <!-- spotify -->
            <spotify></spotify>

        </v-container>

    </v-container>

</template>

<script setup lang="ts">

    import Spotify     from '~/components/sections/Spotify.vue'
    import PageHeading from '~/components/headings/PageHeading.vue'

    const runtimeConfig = useRuntimeConfig()

    const { data: weather } = useFetch(runtimeConfig.public.apiBaseUrl + '/weather/current')

</script>

<style scoped>

</style>
