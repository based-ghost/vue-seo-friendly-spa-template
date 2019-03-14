/* eslint-disable no-param-reassign,import/no-extraneous-dependencies */
const path = require('path');
const cheerio = require('cheerio');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const CompressionWebpackPlugin = require("compression-webpack-plugin");

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
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.(js|css)$/,
          threshold: 8192,
          minRatio: 0.8 
        }),
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

            // Remove duplicate preload scripts (should be taken care of in .js bundle - this removes the preload warnings in Chrome)
            $('head').children('link[rel="preload"][as="script"]').remove();

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
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-180x180.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
    workboxOptions: {
      cacheId: 'VueSeoSpa',
      importWorkboxFrom: 'local',
      navigateFallback: 'index.html',
      navigateFallbackWhitelist: [/^((?!\/404).)*$/],
    },
  },
};