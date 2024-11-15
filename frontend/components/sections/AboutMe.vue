<template>

    <v-row>

        <v-col cols="12" sm="12" md="4" lg="5" xl="5" class="text-center">

            <nuxt-img src="/img/personal/martin_hektor_container_hotel.webp" class="profile-image" alt="Martin at Hektor Container Hotel"></nuxt-img>

        </v-col>

        <v-col cols="12" sm="12" md="8" lg="7" xl="7" class="">

            <h2 class="text-gradient text-h4 text-medium-emphasis mb-5 text-center">

                Welcome to my digital corner!

            </h2>

            <h3 class="text-medium-emphasis mb-5 text-center">

                I'm a Software Engineer crafting code and solutions from
                {{ weather ? weather.current.temp_c : 0 }}&deg;C Tallinn, Estonia

            </h3>

            <div class="mb-5 text-justify">

                My journey into technology began with curiosity and experimentation, evolving
                into a deep fascination with software development's limitless potential. In
                my early years, I immersed myself in coding, driven to understand how things
                worked under the hood.

            </div>

            <div class="mb-5 text-justify">

                Over time, I've mastered a diverse set of programming languages, frameworks,
                and tools, enabling me to tackle projects across a wide spectrum of domains.
                From designing efficient algorithms to architecting robust, scalable systems,
                I've grown alongside the tech landscape.

            </div>

            <div class="text-justify">
                Today, I focus on building efficient, user-centered solutions, always
                seeking to optimize and innovate. Technology never stands still, and
                neither do I.
            </div>

        </v-col>

    </v-row>

</template>

<script setup lang="ts">

    // composable
    const runtimeConfig = useRuntimeConfig()

    // api requests..
    const { data: weather } = useFetch(runtimeConfig.public.apiBaseUrl + '/weather/current')

</script>

<style scoped>

    .profile-image {
        width: 300px;
        border-radius: 15px 50px 30px;
    }

</style>
