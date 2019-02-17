export const RoutesConfig = {
    Home: {
        path: '/',
        displayName: 'Home',
        meta: {
            transitionName: 'fade',
            icon: 'home',
            metaInfo: {
                title: 'Modern web application development',
                titleTemplate: '%s | BasedGhostDevelopment'
            }
        }
    },
    Archive: {
        path: '/posts',
        displayName: 'Post Archive',
        meta: {
            transitionName: 'pageSlideLeft',
            icon: 'file-alt',
            metaInfo: {
                title: 'Blog posts',
                titleTemplate: '%s | BasedGhostDevelopment',
                description: 'Blog posts cover web technologies used to create projects found on GitHub (based-ghost) by Matt Areddia - e.g. ASP.NET Core, Vue, Vuex, React, Redux, TypeScript'
            }
        }
    }
};
