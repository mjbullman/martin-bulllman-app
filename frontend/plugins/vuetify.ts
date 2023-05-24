// vuetify plugin.
import { createVuetify, ThemeDefinition } from 'vuetify';

const customLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary              : '#2196F3',
        'primary-darken-1'   : '#1E88E5',
        secondary            : '#FF5722',
        'secondary-darken-1' : '#F4511E',
        error                : '#F44336',
        info                 : '#2196F3',
        success              : '#4CAF50',
        warning              : '#FF9800'
    }
}

const customDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary              : '#FF5722',
        'primary-darken-1'   : '#F4511E',
        secondary            : '#2196F3',
        'secondary-darken-1' : '#1E88E5',
        error                : '#F44336',
        info                 : '#2196F3',
        success              : '#4CAF50',
        warning              : '#FF9800'
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        theme: {
            defaultTheme: 'customLightTheme',
            themes: {
                customDarkTheme,
                customLightTheme
            },
          },
    });

    nuxtApp.vueApp.use(vuetify);
});