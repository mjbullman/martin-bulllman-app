// plugins/vuetify.ts

import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa-svg'

/**
 * Custom light theme configuration for Vuetify.
 */
const customLightTheme = {
    dark: false,
    colors: {
        'primary': '#2196F3',
        'primary-darken-1': '#0367B4',
        'secondary': '#02E8CA',
        'secondary-darken-1': '#00937F',
        'tertiary': '#081AE0',
        'tertiary-darken-1': '#050E82',
        'quaternary': '#FB8C00',
        'quaternary-darken-1': '#9A5600',
        'error': '#F44336',
        'info': '#2196F3',
        'success': '#4CAF50',
        'warning': '#FF9800'
    }
}

/**
 * Custom dark theme configuration for Vuetify
 */
const customDarkTheme = {
    dark: true,
    colors: {
        'primary': '#2196F3',
        'primary-darken-1': '#0367B4',
        'secondary': '#02E8CA',
        'secondary-darken-1': '#00937F',
        'tertiary': '#081AE0',
        'tertiary-darken-1': '#050E82',
        'quaternary': '#FB8C00',
        'quaternary-darken-1': '#9A5600',
        'error': '#F44336',
        'info': '#2196F3',
        'success': '#4CAF50',
        'warning': '#FF9800'
    }
}

/**
 * Nuxt plugin to set up Vuetify with custom themes and Font Awesome icons.
 *
 * This plugin registers Vuetify with SSR support, dark/light themes,
 * and FontAwesome as the default icon set.
 *
 * @param {import('@nuxt/schema').NuxtApp} nuxtApp - The Nuxt app instance
 */
export default defineNuxtPlugin ((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: true,
        theme: {
            defaultTheme: 'customDarkTheme',
            themes: {
                customDarkTheme,
                customLightTheme
            }
        },
        icons: {
            defaultSet: 'fa',
            aliases,
            sets: { fa }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
