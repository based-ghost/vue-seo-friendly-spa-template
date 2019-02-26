import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faCode,
    faHome,
    faLock,
    faMugHot,
    faFileAlt,
    faChevronUp,
    faChevronRight,
    faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
    faGithub,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faCode,
    faHome,
    faLock,
    faMugHot,
    faGithub,
    faTwitter,
    faFileAlt,
    faChevronUp,
    faChevronRight,
    faExclamationCircle,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);