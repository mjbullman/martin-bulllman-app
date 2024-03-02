<template>

    <v-row v-if="profile && playlists && tracks && following && artists">

        <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center">

            <h2 class="text-h3 text-gradient-animation">

                Spotify Music

            </h2>

        </v-col>

        <!-- profile info -->
        <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center">

            <nuxt-img :src="profile.images[1].url" class="avatar" alt="Martin Spotify profile image"></nuxt-img>

            <div class="pa-5 text-h4 text-medium-emphasis">

                {{ profile.display_name }}

            </div>

            <div>

                <v-btn :href="profile.external_urls.spotify" size="small" rounded target="_blank">

                    Follow

                </v-btn>

            </div>

        </v-col>

        <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="text-center d-flex justify-center text-center pb-10">

            <div class="pl-5 pr-5">

                <div class="text-secondary text-h5 font-weight-bold">

                    {{ profile.followers.total }}

                </div>

                <div class="text-medium-emphasis">

                    Followers

                </div>

            </div>

            <div class="pl-5 pr-5">

                <div class="text-secondary text-h5 font-weight-bold">

                    {{ following.artists.total }}

                </div>

                <div class="text-medium-emphasis">

                    Following

                </div>

            </div>

            <div class="pl-5 pr-5">

                <div class="text-secondary text-h5 font-weight-bold">

                    {{ playlists.total }}

                </div>

                <div class="text-medium-emphasis">

                    Playlist

                </div>

            </div>

        </v-col>

        <!-- now playing -->
        <v-col v-if="playing" cols="12" sm="8" offset-sm="2" md="6" offset-md="3" lg="4" offset="4" xl="12" align-self="center" class="pb-10">

            <div class="text-secondary text-center pa-2">

                Now Playing!

            </div>

            <v-card rounded="100">

                <v-list lines="two" class="pa-0" aria-label="currently playing spotify track">

                    <v-list-item
                        :key="playing.item.id"
                        :title="playing.item.name"
                        :subtitle="playing.item.artists[0].name"
                        :href="playing.item.external_urls.spotify"
                        link
                        target="_blank"
                        role="option"
                        aria-selected="false">

                        <template v-slot:prepend>

                            <v-avatar size="large" :image="playing.item.album.images[0].url"></v-avatar>

                        </template>

                        <template v-slot:append>

                            <music-waves class="pl-2"></music-waves>

                        </template>

                    </v-list-item>

                </v-list>

                <div class="pl-4 pr-4 pb-2 pt-2 d-flex align-center">

                        <div class="pr-5">

                            {{ millisToMinutesAndSeconds(playing.progress_ms) }}

                        </div>

                        <v-progress-linear
                            :model-value="playing.progress_ms / playing.item.duration_ms * 100"
                            color="secondary"
                            rounded
                            aria-label="currently playing progress bar"
                            role="progressbar">
                        </v-progress-linear>

                        <div class="pl-5">

                            {{ millisToMinutesAndSeconds(playing.item.duration_ms) }}

                        </div>

                    </div>

            </v-card>

        </v-col>

        <!-- top tracks -->
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" align-self="center">

            <h3 class="text-h5 pb-5 text-primary font-weight-bold text-center">

                Top Tracks

            </h3>

            <v-card variant="outlined" rounded color="primary">

                <v-list lines="two" class="pa-0" aria-label="my spotify top tracks list">

                    <v-list-item
                        v-for="track in tracks.items"
                        :key="track.id"
                        :title="track.name"
                        :href="track.external_urls.spotify"
                        link
                        target="_blank"
                        role="option"
                        aria-selected="false">

                        <template v-slot:prepend>

                            <v-avatar size="large" :image="track.album.images[0].url"></v-avatar>

                        </template>

                        <v-list-item-subtitle class="text-truncate d-flex">

                            <div v-for="(artist, index) in track.artists" class="pr-1 text-truncate">

                                {{ artist.name }}{{ index != track.artists.length - 1 ? ',' : ''}}

                            </div>

                        </v-list-item-subtitle>

                    </v-list-item>

                </v-list>

            </v-card>

        </v-col>

        <!-- top playlists -->
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" align-self="center">

            <h3 class="text-h5 pb-5 text-primary font-weight-bold text-center">

                Top Playlists

            </h3>

            <v-card variant="outlined" rounded color="primary">

                <v-list lines="two" class="pa-0" aria-label="my spotify top playlists">

                    <v-list-item
                        v-for="playlist in playlists.items"
                        :key="playlist.id"
                        :title="playlist.name"
                        :subtitle="playlist.owner.display_name"
                        :href="playlist.external_urls.spotify"
                        link
                        target="_blank"
                        role="option"
                        aria-selected="false">

                        <template v-slot:prepend>

                            <v-avatar size="large" :image="playlist.images[0].url"></v-avatar>

                        </template>

                    </v-list-item>

                </v-list>

            </v-card>

        </v-col>

        <!-- top artists -->
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" align-self="center">

            <h3 class="text-h5 pb-5 text-primary font-weight-bold text-center">

                Top Artists

            </h3>

            <v-card variant="outlined" rounded color="primary">

                <v-list lines="two" class="pa-0" aria-label="my spotify top artists list">

                    <v-list-item
                        v-for="artist in artists.items"
                        :key="artist.id"
                        :title="artist.name"
                        :href="artist.external_urls.spotify"
                        link
                        target="_blank"
                        role="option"
                        aria-selected="false">

                        <template v-slot:prepend>

                            <v-avatar size="large" :image="artist.images[0].url"></v-avatar>

                        </template>

                    </v-list-item>

                 </v-list>

            </v-card>

        </v-col>

    </v-row>

</template>

<script setup lang="ts">

    const runtimeConfig = useRuntimeConfig()

    let counter = ref(0)

    const { data: profile } = useFetch(runtimeConfig.public.apiBaseUrl + '/spotify/profile', {
        lazy   : true,
        server : false
    })

    const { data: playlists } = useFetch(runtimeConfig.public.apiBaseUrl + '/spotify/playlists', {
        lazy   : true,
        server : false
    })

    const { data: tracks } = useFetch(runtimeConfig.public.apiBaseUrl + '/spotify/top_tracks', {
        lazy   : true,
        server : false
    })

    const { data: artists } = useFetch(runtimeConfig.public.apiBaseUrl + '/spotify/top_artists', {
        lazy   : true,
        server : false
    })

    const { data: following } = useFetch(runtimeConfig.public.apiBaseUrl + '/spotify/following', {
        lazy   : true,
        server : false
    })

    let { data: playing } = useFetch(runtimeConfig.public.apiBaseUrl + '/spotify/currently_playing', {
        lazy   : true,
        server : false,
        watch: [counter]
    })

    // onNuxtReady (() => {
    //     setInterval(() => {
    //         counter.value = counter.value += 1
    //     }, 1000)
    // })

    function millisToMinutesAndSeconds(millis:number) {
        let minutes:number = Math.floor(millis / 60000);
        let seconds:number = ((millis % 60000) / 1000);

        return minutes + ":" + (seconds < 9 ? '0' : '') + seconds.toFixed(0);
    }

</script>

<style scoped lang="scss">

    .avatar {
        border-radius: 50%;
    }

    :deep(.v-progress-linear) {
        left: unset !important;
        transform: unset !important;
    }

</style>
