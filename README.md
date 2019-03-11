# vue-seo-friendly-spa-template
Vue.js PWA/SPA template configured for SEO (initially scaffolded with vue-cli). You can find the React version here: [react-seo-friendly-spa-template](https://github.com/based-ghost/react-seo-friendly-spa-template)


![](demo/vue-seo-friendly-demo-2.gif)


## General Overview
This template mimics the setup I went through when experimenting with the creation of my own static front-end blog site that was to be hosted on Netlify (using GitHub as a repository/pipeline). You can find that experiment live here: https://basedghostdevelopment.com. After playing around with this process & technologies I figured I'd build a higher-level (yet still feature-rich) abstraction of that project for quick re-use in the future.

## Technology Stack Overview

### vue-cli

initial scaffolding

### vue-meta

[`vue-meta`](https://github.com/nuxt/vue-meta) - plugin that allows you to manage your app's meta information, much like [`react-helmet`](https://github.com/nfl/react-helmet) does for React. However, instead of setting your data as props passed to a proprietary component, you simply export it as part of your component's data using the metaInfo property.
  
I have it configured to use a utility function called `buildMetaInfo` which you pass an object to at the top of the component like this for example:

```typescript
    import { buildMetaInfo } from '@/utils/metaInfo';

    @Component({
        metaInfo() {
            return buildMetaInfo(RoutesConfig.About.meta.metaInfo);
        },
    })
    export default class About extends Vue { }
```

### vue-analytics

[`vue-analytics`](https://github.com/MatteoGabriele/vue-analytics) - Google Analytics manager plugin. The plugin isn't just a wrapper of the Google Analytics API, but provides a solution to issues that most of the time you don't want to deal with or you not even know you have to deal with.

I have it configured in the main.ts file:

```typescript
    import Vue from 'vue';
    import router from '@/router';
    import VueAnalytics from 'vue-analytics';

    Vue.use(VueAnalytics, {
        id: 'UA-xxxxxxxxx-x',
        checkDuplicatedScript: true,
        router,
        debug: {
            sendHitTask: (process.env.NODE_ENV === 'production'),
        },
    });
```

### prerender-spa-plugin

[`prerender-spa-plugin`](https://github.com/chrisvfritz/prerender-spa-plugin) - Prerenders static HTML in a single-page application. This is a more straightforward substitue for SSR (Server Side Rendering) and the primary benefit is SEO.

Configured in the app as follows:

`main.ts` - need to fire an event after the app is mounted to let the prerenderer know when to pick up from. 
`vue.config.js` - add the `renderAfterDocument` property to the renderer (value matching the event name dispatched in `main.ts`).

* This is only needed if you need to await the result of an async request. In the default state of this app, it is not needed, but I left it in just in case as the impact to load time is minimal).

`main.ts`
```typescript
// Mount app to Vue instance
// mounted() has callback to fire event that the prerender plugin listens for in order to take its snapshot
new Vue({
     router,
     render: (h) => h(App),
     mounted() {
         document.dispatchEvent(new Event('render-event'));
     },
}).$mount('#app');
```

`vue.config.js`
```javascript
renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
  renderAfterDocumentEvent: 'render-event'
}),
```

Remainder of the configuration takes place in `vue.config.js` file where the plugin is added and configured. In the `postProcess` callback I am editing the prerendered content using `cheerio` so you can load the raw prerendered html string into a usable document and modify it using JQuery-like syntax, rather than parsing a long string and calling .replace. I found that adding a `defer` attribute to all the `script tags` is optimal since the initial render will not need any javascript loaded - this will allow the browser to load the scripts when needed and improve initial load performance. I also found that dynamically adding the `data-server-rendered='true'` attribute in the `postProcess` (rather than hard-coding in the index.html file) seems to work - this lets the client know that this nodes contents was rendered on server and to hydrate the html with changes, rather than render/replace.

## Scripts

### `npm install`

After cloning the repo, run this command.  This will:

- Install Node dependencies from package.json

### `npm run serve`

To start the app (development build), run this command.  This will:

- Compile the app and run on the development server

### `npm run lint`

- Run the linter (configured in the tslint.json file found in the root of this project)

### `npm run sitemap`

- This command will execute code in the sitemap-generator.js. Using the sitemapUrl parameter defined in that file (should reflect your registered domain name) a sitemap.xml is generated and persisted under the 'public' folder - this file is referenced in the robots.txt file. This uses the `sitemap-generator` package.

### `npm run build`

This script will:
 - Build release Webpack bundles
