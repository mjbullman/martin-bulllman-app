export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': true,
        },
    },
    runtimeConfig: {
        // the private keys which are only available server-side
        apiSecret: '',
        // keys within public are also exposed client-side
        public: {
            apiBase: ''
        }
    }
})
