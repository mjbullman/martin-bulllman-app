// composables/useMixpanel.ts

import { useNuxtApp } from '#app'

/**
 * Provides Mixpanel tracking and user identification methods.
 */
export function useMixpanel () {
    const { $mixpanel } = useNuxtApp()

    /**
     * Track an event with optional properties in Mixpanel.
     *
     * @param {string} eventName - Name of the event.
     * @param {Record<string, any>} [props] - Additional event properties.
     */
    function track (eventName: string, props?: Record<string, never>) {
        if ($mixpanel) {
            $mixpanel.track(eventName, props)
        }
    }

   /**
    * Identify a user and optionally set their properties.
    *
    * @param {string} userId - Unique user identifier.
    * @param {Record<string, any>} [props] - User properties to set.
    */
    function identify (userId: string, props?: Record<string, never>) {
        if ($mixpanel) {
            $mixpanel.identify(userId)

            if (props) {
                $mixpanel.people.set(props)
            }
        }
    }

    return { track, identify }
}
