// plugins/recaptcha.ts

import { VueReCaptcha } from 'vue-recaptcha-v3'
import type { IReCaptchaOptions } from 'vue-recaptcha-v3/dist/IReCaptchaOptions'

/**
 * Nuxt 3 plugin to enable Google reCAPTCHA v3 globally.
 *
 * This plugin registers the `vue-recaptcha-v3` plugin with configuration
 * using the public runtime config `recaptchaSiteKey`.
 *
 * You can then use `useRecaptcha()` in your components to trigger validation.
 *
 * Docs: https://www.npmjs.com/package/vue-recaptcha-v3.
 */
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    /**
     * reCAPTCHA options used by the plugin.
     *
     * @type {IReCaptchaOptions}
     */
    const options: IReCaptchaOptions = {
        siteKey: config.public.recaptchaSiteKey,
        loaderOptions: {
            autoHideBadge: true,
            useRecaptchaNet: true
        }
    }

    nuxtApp.vueApp.use(VueReCaptcha, options)
})
