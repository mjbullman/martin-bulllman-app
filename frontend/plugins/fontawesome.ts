// fontawesome plugin.
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGlobe, faBars, faX, faXmarkCircle, faS }
                           from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun, faEnvelope, faCircleXmark, faMessage,  faUser }
                           from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn,faGithubAlt, faInstagram, faFacebook, faXTwitter, faYoutube }
                           from '@fortawesome/free-brands-svg-icons';

library.add(
    faLinkedinIn, faGithubAlt, faInstagram, faFacebook, faXTwitter,
    faBars, faGlobe, faSun, faMoon, faEnvelope, faX, faCircleXmark, faYoutube,
    faXmarkCircle, faMessage, faUser
);

// this is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
