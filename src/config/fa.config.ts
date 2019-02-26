import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faCode,
    faHome,
    faMugHot,
    faFileAlt,
    faMailBulk,
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
    faMugHot,
    faGithub,
    faTwitter,
    faFileAlt,
    faMailBulk,
    faChevronUp,
    faChevronRight,
    faExclamationCircle,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);