import { VueReCaptcha }           from 'vue-recaptcha-v3'
import { type IReCaptchaOptions } from 'vue-recaptcha-v3/dist/IReCaptchaOptions'

/**
 * The plugin enables the usage of Google reCAPTCHA in a Nuxt.js application.
 */
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const options: IReCaptchaOptions = {
        siteKey: config.public.recaptchaSiteKey,
        loaderOptions: {
            autoHideBadge: true,
            useRecaptchaNet: true
        },
    };

    nuxtApp.vueApp.use(VueReCaptcha, options)
})
