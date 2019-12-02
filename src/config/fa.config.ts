import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faCheck,
  faInfoCircle,
  faAngleDoubleUp,
  faExternalLinkAlt,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

import {
  faVuejs,
  faGithub,
  faMediumM,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faVuejs,
  faCheck,
  faGithub,
  faMediumM,
  faTwitter,
  faInfoCircle,
  faAngleDoubleUp,
  faExternalLinkAlt,
  faExclamationCircle
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
