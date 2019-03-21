export const routesConfig = {
    Home: {
        path: '/',
        displayName: 'Home',
        meta: {
            transitionName: 'fade',
            icon: 'home',
            metaInfo: {
                title: 'Home',
                titleTemplate: '%s | VueSeoFriendlySpaTemplate',
                description: 'Home page description - limit of 160 characters (try for 150-155).',
            },
        },
    },
    About: {
        path: '/about',
        displayName: 'About',
        meta: {
            transitionName: 'pageSlideDown',
            icon: 'info',
            metaInfo: {
                title: 'About',
                titleTemplate: '%s | VueSeoFriendlySpaTemplate',
                description: 'About page description - limit of 160 characters (try for 150-155).',
            },
        },
    },
};
