// google analytics plugin.
import VueGtag from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    // only include google analytics script in production environment.
    if (config.public.isProduction) {

        nuxtApp.vueApp.use(VueGtag, {
            property: {
                id: config.public.googleAnalyticsId
            }
        });

    }
});