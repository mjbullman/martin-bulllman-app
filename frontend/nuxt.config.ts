// imports.
import vuetify from 'vite-plugin-vuetify'
import { useEnvironment } from './composables/environment'

// composable.
const { isProduction } = useEnvironment()

export default defineNuxtConfig({
    modules: [
        'nuxt-gtag',
        '@nuxt/image',
        '@pinia/nuxt',
        '@nuxt/eslint',
        '@nuxtjs/sitemap',
        'nuxt-schema-org',
        '@vueuse/motion/nuxt',
        '@nuxt/test-utils/module',
        // vuetify tree shaking configuration: https://next.vuetifyjs.com/en/features/treeshaking/
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config?.plugins?.push(vuetify())
            })
        }
    ],
    ssr: true,
    devtools: {
        enabled: !isProduction()
    },
    app: {
        head: {
            title: 'Martin Bullman | Software Engineer & Full Stack Developer',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {
                    name: 'description',
                    content: 'The portfolio of Martin Bullman, Software Engineer & Full '
                        + 'Stack Developer.'
                },
                {
                    name: 'keywords',
                    content: 'Martin Bullman,Django,Vue,Vuetify,Nuxt,Software Engineering,'
                        + 'Portfolio,Projects,Web Development,Data Analysis,Expertise,Skills,'
                        + 'Innovation,Solutions,Excellence,Technical Abilities,Developer,'
                        + 'Technology'
                },
                {
                    name: 'author',
                    content: 'Martin Bullman'
                }
            ]
        },
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        }
    },
    css: [
        '@/assets/scss/app.scss',
        'vuetify/lib/styles/main.sass',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    site: {
        url: process.env.BASE_URL,
        name: 'Martin Bullman | Software Engineer & Full Stack Developer',
        description: 'The portfolio of Martin Bullman, Software Engineer & Full Stack Developer.',
        defaultLocale: 'en'
    },
    runtimeConfig: {
        // the private keys which are only available server-side.
        apiSecret: '',
        // keys within public are also exposed client-side.
        public: {
            baseUrl: process.env.BASE_URL,
            apiBaseUrl: process.env.API_BASE_URL,
            isProduction: isProduction(),
            recaptchaSiteKey: process.env.GOOGLE_RECAPTCHA_SITE_KEY
        }
    },
    build: {
        transpile: [
            'vuetify',
            '@fortawesome/vue-fontawesome',
            '@fortawesome/pro-solid-svg-icons',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/pro-regular-svg-icons',
            '@fortawesome/free-brands-svg-icons'
        ]
    },
    compatibilityDate: '2025-03-07',
    vite: {
        define: {
            'process.env.DEBUG': true
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@use "~/assets/scss/_colors.scss" as *; '
                        + '@use "~/assets/scss/_fonts.scss" as *;'
                        + ' @use "~/assets/scss/_animations.scss" as *;'
                }
            }
        }
    },
    eslint: {
        // additional configs here
    },
    gtag: {
        enabled: isProduction(),
        id: process.env.GOOGLE_ANALYTICS_ID
    },
    image: {
        // the screen sizes predefined by `@nuxt/image`:
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536
        }
    },
    schemaOrg: {
        identity: {
            type: 'Person',
            name: 'Martin Bullman',
            url: process.env.BASE_URL,
            logo: process.env.BASE_URL + '/img/logo.svg'
        }
    }
})
