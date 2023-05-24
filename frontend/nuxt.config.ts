// nuxt main config.
import vuetify        from 'vite-plugin-vuetify';
import {isProduction} from 'std-env';

export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify']
    },
    vite: {
        define: {
            'process.env.DEBUG': true
        },
    },
    app: {
        head: {
            title    : 'Martin Bullman - Personal App',
            charset  : 'utf-8',
            viewport : 'width=device-width, initial-scale=1',
            meta: [{
                name    : 'description',
                content : "Martin Bullman Personal App"
            }, {
                name    : 'keywords',
                content : 'Martin Bullman,Django,Vue,Vuetify,Nuxt'
            }, {
                name    : 'author',
                content : 'Martin Bullman'
            }]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    runtimeConfig: {
        // the private keys which are only available server-side.
        apiSecret: '',
        // keys within public are also exposed client-side.
        public: {
            apiBase           : '',
            isProduction      : isProduction,
            googleAnalyticsId : process.env.GOOGLE_ANALYTICS_ID
        }
    },
    modules: [
        // pinia state management.
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        // vuetify tree shaking configuration: https://next.vuetifyjs.com/en/features/treeshaking/
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config?.plugins?.push(vuetify());
           });
        }
    ]
});
