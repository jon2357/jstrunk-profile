/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faCircle,
  faComment,
  faPaperPlane,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";

import {
  faCoffee,
  faUserSecret,
  faHouse,
  faInfoCircle,
  faBlog,
  faLightbulb,
  faBriefcaseClock,
  faBars,
  faAnglesRight,
  faCalendarDays,
  faPhone,
  faEnvelope,
  faArrowsUpDown,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

// Add Selected Icons to the library
library.add(
  faArrowUp,
  faArrowDown,
  faArrowsUpDown,
  faPhone,
  faEnvelope,
  faNewspaper,
  faCalendarDays,
  faPaperPlane,
  faMedium,
  faLinkedin,
  faAnglesRight,
  faBars,
  faInfoCircle,
  faBlog,
  faLightbulb,
  faBriefcaseClock,
  faHouse,
  faUserSecret,
  faCoffee,
  faUser,
  faEnvelope,
  faCircle,
  faComment,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithub
);

// export the font awesome icons for use in our vue application
export default (app) => {
  app.component("font-awesome-icon", FontAwesomeIcon);
};

// Examples of how to call fonts in your code
// <font-awesome-icon icon="fa-brands fa-twitter" />
// <font-awesome-icon icon="fa-solid fa-coffee" />
// <font-awesome-icon icon="fa-regular fa-comment" />
