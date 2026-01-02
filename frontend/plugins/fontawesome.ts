// plugins/fontawesome.ts

/**
 * Font Awesome plugin for Nuxt 3
 *
 * This plugin imports and registers selected Font Awesome icons globally
 * so you can use <font-awesome-icon /> anywhere in your app without importing them each time.
 */

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import solid icons
import {
    faGlobe,
    faBars,
    faX,
    faXmarkCircle,
    faArrowUpRightFromSquare,
    faLink
} from '@fortawesome/free-solid-svg-icons'

// import regular icons
import {
    faMoon,
    faSun,
    faEnvelope,
    faCircleXmark,
    faMessage,
    faUser,
    faFilePdf
} from '@fortawesome/free-regular-svg-icons'

// import brand icons
import {
    faLinkedinIn,
    faGithubAlt,
    faInstagram,
    faFacebook,
    faXTwitter,
    faYoutube,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

// add all the imported icons to the Font Awesome library
library.add(
    faLinkedinIn,
    faGithubAlt,
    faInstagram,
    faFacebook,
    faXTwitter,
    faGithub,
    faBars,
    faGlobe,
    faSun,
    faMoon,
    faEnvelope,
    faX,
    faCircleXmark,
    faYoutube,
    faXmarkCircle,
    faMessage,
    faUser,
    faFilePdf,
    faArrowUpRightFromSquare,
    faLink
)

// disable auto-injection of CSS because Nuxt handles it.
config.autoAddCss = false

/**
 * Nuxt plugin to register <font-awesome-icon> globally
 *
 * @param {object} nuxtApp - The Nuxt app instance
 */
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
