// middleware/mixpanel.global.ts

import { MixpanelEvents } from '@/constants/mixpanelEvents'

/**
 * Middleware to track page views with Mixpanel on every route change.
 *
 * @param {import('vue-router').RouteLocationNormalized} to - The target route object being navigated to.
 * @param {import('vue-router').RouteLocationNormalized} from - The current route being navigated away from.
 * @param {import('#app').NuxtApp} nuxtApp - The Nuxt application instance, used to access Mixpanel.
 */
export default defineNuxtRouteMiddleware(async () => {
    const { $mixpanel } = useNuxtApp()

    $mixpanel.track(MixpanelEvents.PAGE_VIEW)
})
