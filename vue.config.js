/* eslint-disable no-param-reassign,import/no-extraneous-dependencies */
const path = require('path');
const cheerio = require('cheerio');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  // https://cli.vuejs.org/guide/webpack.html
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      return {};
    }

    return {
      devtool: false,
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      },
      plugins: [
        // https://github.com/chrisvfritz/prerender-spa-plugin
        new PrerenderSPAPlugin({
          staticDir: config.output.path,
          routes: ['/', '/about', '/404'],
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
            renderAfterDocumentEvent: 'render-event'
          }),
          postProcess(context) {
            if (context.route === '/404') {
              context.outputPath = path.join(config.output.path, '/404.html');
            }
            
            const $ = cheerio.load(context.html);
            const headEl = $('head');
            
            // Remove duplicate preload scripts (should be taken care of in .js bundle - this removes the preload warnings in Chrome)
            // Remove google analytics script (will be readded by client)
            headEl.children('link[rel="preload"][as="script"]').remove();
            headEl.children('script[src*="google-analytics"]').remove();

            // Add defer attribute to script tags (load performance improvement since .js resource loading can occur following first render)
            $('script').each(function(i, elem) {
                $(this).attr('defer', '');
            });
            
            // Add data-server-rendered="true" to #app (dynamically add here rather than hard code in index.html)  
            $('#app').attr('data-server-rendered', 'true');

            context.html = $.html();
            return context;
          },
        }),
      ],
    };
  },

  // Load sass global variables/mixins - can then be referenced in style sheets / in-line style .vue style tags
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/assets/style/base/variables.scss";`
      }
    }
  },

  // https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {
    name: 'VueSeoFriendlySpaTemplate',
    themeColor: '#fff',
    msTileColor: '#fff',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      cacheId: 'vue-seo',
      importWorkboxFrom: 'local',
      navigateFallback: 'index.html',
      navigateFallbackWhitelist: [/^((?!\/404).)*$/],
    }
  }
};