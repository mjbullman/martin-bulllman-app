// nuxt main config.
import vuetify          from 'vite-plugin-vuetify';
import { isProduction } from 'std-env';

export default defineNuxtConfig({
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
    css: [
        'vuetify/lib/styles/main.sass',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    build: {
        transpile: [
            'vuetify',
            "@fortawesome/vue-fontawesome",
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/pro-solid-svg-icons",
            "@fortawesome/pro-regular-svg-icons",
            "@fortawesome/free-brands-svg-icons",
        ]
    },
    vite: {
        define: {
            'process.env.DEBUG': true
        },
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
