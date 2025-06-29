// plugins/mixpanel.ts

import mixpanel from 'mixpanel-browser'
import { useEnvironment } from '~/composables/environment'

/**
 * Nuxt 3 plugin to initialize and provide Mixpanel analytics.
 *
 * This plugin:
 * - Initializes Mixpanel using the public runtime config token.
 * - Enables debug mode in non-production environments.
 * - Provides the Mixpanel instance to the Nuxt app via `useNuxtApp().$mixpanel`.
 *
 * @param {import('@nuxt/schema').NuxtApp} nuxtApp - The Nuxt app instance.
 */
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const { isProduction } = useEnvironment()

    if (isProduction()) {
        mixpanel.init(config.public.mixpanelToken, {
            debug: !isProduction()
        })

        nuxtApp.provide('mixpanel', mixpanel)
    }
    else {
        nuxtApp.provide('mixpanel', {
            track: () => {},
            identify: () => {}
        })
    }
})
