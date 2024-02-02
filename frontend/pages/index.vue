<template>

    <div>

    <v-container class="fill-height">

        <v-row class="d-flex flex-column flex-sm-row align-content-space-between flex-al mt-5 mt-md-0" justify="center" align="center">

            <v-col class="text-center text-sm-left">

                <h1 class="text-h4 text-md-h2">

                    Hi, I'm Martin

                </h1>

                <h3 class="text-h6 text-md-h4 text-medium-emphasis">

                    FullStack Developer & Crypto Enthusiast

                </h3>

            </v-col>

            <v-col>

                <nuxt-img :src="settings.darkMode ? '/img/index/developer_developing_dark.svg' : '/img/index/developer_developing_light.svg'" alt="Developer working at his desk"></nuxt-img>

            </v-col>

        </v-row>

    </v-container>

    <v-container>

        <v-timeline align="start">
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :dot-color="year.color"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${year.color}`"
          v-text="year.year"
        ></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
          Lorem ipsum
        </h2>
         <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Lorem ipsum
        </v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
      </div>
    </v-timeline-item>
  </v-timeline>

    </v-container>

    </div>

</template>

<script setup lang="ts">

    // imports.
    import { useSettingsStore } from '@/stores/settings';

    // state.
    const settings = useSettingsStore();

     const years = [
        {
          color: 'cyan',
          year: '1960',
        },
        {
          color: 'green',
          year: '1970',
        },
        {
          color: 'pink',
          year: '1980',
        },
        {
          color: 'amber',
          year: '1990',
        },
        {
          color: 'orange',
          year: '2000',
        },
      ]

</script>

<style scoped>

</style>
