// vuetify plugin.
import { createVuetify } from 'vuetify'
import { aliases, fa }   from 'vuetify/iconsets/fa-svg'

// light theme configuration.
const customLightTheme = {
    dark: false,
    colors: {
        primary               : '#2196F3',
        'primary-darken-1'    : '#0367B4',
        secondary             : '#02E8CA',
        'secondary-darken-1'  : '#00937F',
        tertiary              : '#081AE0',
        'tertiary-darken-1'   : '#050E82',
        quaternary            : '#FB8C00',
        'quaternary-darken-1' : '#9A5600',
        error                 : '#F44336',
        info                  : '#2196F3',
        success               : '#4CAF50',
        warning               : '#FF9800'
    }
}

// dark theme configuration.
const customDarkTheme = {
    dark: true,
    colors: {
        primary               : '#2196F3',
        'primary-darken-1'    : '#0367B4',
        secondary             : '#02E8CA',
        'secondary-darken-1'  : '#00937F',
        tertiary              : '#081AE0',
        'tertiary-darken-1'   : '#050E82',
        quaternary            : '#FB8C00',
        'quaternary-darken-1' : '#9A5600',
        error                 : '#F44336',
        info                  : '#2196F3',
        success               : '#4CAF50',
        warning               : '#FF9800'
    }
}

// vuetify nuxt plugin configuration.
export default defineNuxtPlugin(nuxtApp => {
    // get the users dark mode pref from cookie.
    const darkMode = useCookie('dark-mode')

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
