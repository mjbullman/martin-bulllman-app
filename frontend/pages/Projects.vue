<template>

    <v-container fluid>

        <v-container>

            <v-row>

                <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="pt-5 pb-5 pt-md-12 pb-md-12">

                    <h1 class="text-h2 text-md-h1 pb-5 text-center font-weight-bold text-gradient-animation">

                        Projects

                    </h1>

                </v-col>

            </v-row>

        </v-container>

        <v-container fluid class="pa-0">

            <v-row>

                <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center">

                    <div class="grid-container">

                        <!-- QuickMinutes Project -->
                        <v-card v-motion="animations.fadeUp.value" class="grid-item grid-item-large d-flex flex-column" link hover>

                            <v-img src="/img/projects/quickminutes_banner.webp" cover></v-img>

                            <v-card-title class="pt-5">

                                <h2 class="text-medium-emphasis">

                                    QuickMinutes

                                </h2>

                            </v-card-title>

                            <v-card-subtitle>

                                Meeting Agenda & Minutes Simplified

                            </v-card-subtitle>

                            <v-card-text class="text-subtitle-1">

                                A meeting planning & management tool for centralized collaboration and communication.

                                <br><br>

                                QuickMinutes transforms the process of meeting management into an efficient and
                                satisfying activity.

                            </v-card-text>

                            <v-card-actions>

                                <v-btn href="https://quickminutes.com" target="_blank" variant="text" color="primary">

                                    View

                                </v-btn>

                            </v-card-actions>

                        </v-card>

                        <!-- Data Interoperability Project -->
                        <v-card v-motion="animations.fadeUp.value" class="grid-item d-flex flex-column" link hover>

                            <v-card-title class="pt-5">

                                <h2 class="text-medium-emphasis">

                                    Data Interoperability

                                </h2>

                            </v-card-title>

                            <v-card-subtitle>

                                Interoperability Of Cloud Monitoring Data (FYP)

                            </v-card-subtitle>

                            <v-card-text class="text-subtitle-1">

                                This project addresses the challenge of incompatible data interchange formats in cloud
                                monitoring data.

                                <br><br>

                                Published in the 2016 5th IEEE International Conference on Cloud Networking (CloudNet).

                            </v-card-text>

                            <v-card-actions>

                                <v-btn href="https://github.com/Martin-Bullman/interoperability-of-cloud-monitoring-Data/tree/main" target="_blank" variant="text" color="primary">

                                    Source

                                </v-btn>

                                <v-btn href="/documents/management_for_federated_cloud_services.pdf" target="_blank" variant="text" color="primary">

                                    Publication

                                </v-btn>

                            </v-card-actions>

                        </v-card>

                        <!-- The Story Of Project -->
                        <v-card v-motion="animations.fadeUp.value" class="grid-item grid-item-large d-flex flex-column" link hover>

                            <v-img src="/img/projects/thestoryof_banner.webp" cover></v-img>

                            <v-card-title class="pt-5">

                                <h2 class="text-medium-emphasis">

                                    TheStoryOf

                                </h2>

                            </v-card-title>

                            <v-card-subtitle>

                                Leave Behind More Than Just Memories

                            </v-card-subtitle>

                            <v-card-text class="text-subtitle-1">

                                Capture you or your loved ones' stories. Safeguard them on a dedicated webpage. Share them with a QR code.

                                <br><br>

                                Digital profiles are accessible by QR code on an aluminium plate, letting anyone access treasured memories.

                            </v-card-text>

                            <v-card-actions>

                                <v-btn href="https://www.thestoryof.io/" target="_blank" variant="text" color="primary">

                                    View

                                </v-btn>

                            </v-card-actions>

                        </v-card>

                         <!-- Crowd Insights Project -->
                        <v-card v-motion="animations.fadeUp.value" class="grid-item grid-item-large d-flex flex-column" link hover>

                            <v-img src="/img/projects/taoglas_banner.webp" cover></v-img>

                            <v-card-title class="pt-5">

                                <h2 class="text-medium-emphasis">

                                    Taoglas Crowd Insights

                                </h2>

                            </v-card-title>

                            <v-card-subtitle>

                                People Movement Analytics

                            </v-card-subtitle>

                            <v-card-text class="text-subtitle-1">

                                Platform to monitor and manage crowds via existing
                                Wi-Fi infrastructure or hotspots, both indoors and outdoors

                                <br><br>

                                Monitors the numbers, flows and dwell times of people.

                            </v-card-text>

                            <v-card-actions>

                                <v-btn href="https://crowdinsights.taoglas.com/" target="_blank" variant="text" color="primary">

                                    View

                                </v-btn>

                            </v-card-actions>

                        </v-card>

                        <!-- WatchBots Project -->
                        <v-card class="grid-item d-flex flex-column" link hover>

                            <v-card-title class="pt-5">

                                <h2 class="text-medium-emphasis">

                                    WatchBots

                                </h2>

                            </v-card-title>

                            <v-card-subtitle>

                                The next generation of bot detection

                            </v-card-subtitle>

                            <v-card-text class="text-subtitle-1">

                                Our goal is to provide our clients with the deepest possible insight into their users.

                                <br><br>

                                We do this using a mixture of traditional fingerprint techniques, behaviour detection and side channel detection.

                            </v-card-text>

                            <v-card-actions>

                                <v-btn href="https://watch-bots.com/" target="_blank" variant="text" color="primary">

                                    View

                                </v-btn>

                            </v-card-actions>

                        </v-card>

                        <!-- Multi Agenda Decision Making Project -->
                        <v-card class="grid-item d-flex flex-column" link hover>

                            <v-card-title class="pt-5">

                                <h2 class="text-medium-emphasis">

                                    Multi Agent Decision Making

                                </h2>

                            </v-card-title>

                            <v-card-subtitle>

                                Multi Agenda Decision Making Over Wireless Networks

                            </v-card-subtitle>

                            <v-card-text class="text-subtitle-1">

                                This research project addresses real-time decision-making using wireless networks and Intel
                                Galileo microcontrollers.

                                <br><br>

                                Published in the 2014 Insight Center for Data Analytics Conference.

                            </v-card-text>

                            <v-card-actions>

                                <v-btn href="https://github.com/Martin-Bullman/multi-agenda-decision-making-over-wireless-networks" target="_blank" variant="text" color="primary">

                                    Source

                                </v-btn>

                                <v-btn href="/documents/multi_agent_decision_making_over_wireless_networks_paper.pdf" target="_blank" variant="text" color="primary">

                                    Publication

                                </v-btn>

                                <v-btn href="/documents/multi_agent_decision_making_over_wireless_networks_poster.pdf" target="_blank" variant="text" color="primary">

                                    Poster

                                </v-btn>

                            </v-card-actions>

                        </v-card>

                        <!-- Wagerr Project -->
                        <v-card class="grid-item grid-item-large d-flex flex-column" link hover>

                            <v-img src="/img/projects/wagerr_banner.webp" cover></v-img>

                            <v-card-title class="pt-5">

                                <h2 class="text-medium-emphasis">

                                    Wagerr

                                </h2>

                            </v-card-title>

                            <v-card-subtitle>

                                Decentralised Sports Book Powered by Blockchain

                            </v-card-subtitle>

                            <v-card-text class="text-subtitle-1">

                                Wagerr is a decentralized sports book that brings trustless sports betting to the entire world.

                                <br><br>

                                Because Wagerr has the lowest juice in the world, bettors get a bigger edge when they bet on the Wagerr network.

                            </v-card-text>

                            <v-card-actions>

                                <v-btn href="https://wagerr.com" target="_blank" variant="text" color="primary">

                                    View

                                </v-btn>

                                <v-btn href="/documents/wagerr_white_paper_v1.pdf" target="_blank" variant="text" color="primary">

                                    Whitepaper

                                </v-btn>

                            </v-card-actions>

                        </v-card>

                        <!-- Drop Magnet Project -->
                        <v-card class="grid-item d-flex flex-column" link hover>

                            <v-card-title class="pt-5 d-flex">

                                <h2 class="text-medium-emphasis flex-grow-1">

                                    Drop Magnet

                                </h2>

                                <v-img src="/img/logos/drop_magnet_logo.jpg" class="flex-shrink-1" height="30" width="30"></v-img>

                            </v-card-title>

                            <v-card-subtitle>

                                NFT Marketplace

                            </v-card-subtitle>

                            <v-card-text class="text-subtitle-1">

                                The all-in-one, multi-chain, NFT marketplace aggregator and utility-adding platform.

                                <br><br>

                                Discover NFTs from verified collections and build your web3 social page with DropSwipe.

                            </v-card-text>

                            <v-spacer></v-spacer>

                            <v-card-actions >

                                <v-btn href="https://dropmagnet.com/" target="_blank" variant="text" color="primary">

                                    View

                                </v-btn>

                            </v-card-actions>

                        </v-card>

                        <!-- Dash Boost -->
                        <v-card class="grid-item d-flex flex-column">DashBoost</v-card>
                    </div>

                </v-col>

            </v-row>

        </v-container>

    </v-container>

</template>

<script setup lang="ts">

    import { useAnimations } from '~/composables/animations'

    const animations = useAnimations()

</script>

<style scoped>

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 175px), 1fr));
        grid-template-rows: repeat(3, minmax(200px, auto)) ;
        gap: 2em;
        padding: 10px;
    }

    .grid-item {
        grid-column: span 2;
    }

    .grid-item-large {
        grid-row: span 2;
    }

</style>
