# vue-seo-friendly-spa-template
Vue.js PWA/SPA template configured for SEO (initially scaffolded with vue-cli). You can find the React version here: [react-seo-friendly-spa-template](https://github.com/based-ghost/react-seo-friendly-spa-template)


![](demo/vue-seo-friendly-demo-2.gif)


## General Overview
This template mimics the setup I went through when experimenting with the creation of my own static front-end blog site that was to be hosted on Netlify (using GitHub as a repository/pipeline). You can find that experiment live here: https://basedghostdevelopment.com. After playing around with this process & technologies I figured I'd build a higher-level (yet still feature-rich) abstraction of that project for quick re-use in the future.

## Technology Stack Overview
- **Client**
  - TODO
  
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
