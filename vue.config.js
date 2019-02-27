/* eslint-disable no-param-reassign,import/no-extraneous-dependencies */
const path = require('path');
const cheerio = require('cheerio');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
        // https://github.com/webpack-contrib/copy-webpack-plugin
        new CopyWebpackPlugin([
          {
            from: 'public/manifest.json',
            to: 'manifest.webmanifest',
          },
        ]),
        // https://github.com/chrisvfritz/prerender-spa-plugin
        new PrerenderSPAPlugin({
          staticDir: config.output.path,
          routes: ['/', '/posts/', '/404'],
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
            renderAfterDocumentEvent: 'rendered',
          }),
          postProcess(context) {
            if (context.route === '/404') {
              context.outputPath = path.join(config.output.path, '/404.html');
            }
            
            const $ = cheerio.load(context.html);
            const headNode = $('head');

            // Remove prerendered analytics tag and fortawesome styles tag (client will add and you will have duplicates)
            headNode.children('[src*="https://www.google-analytics.com/analytics.js"]').remove();
            headNode.children('style[type="text/css"]').remove();

            // Add data-server-rendered="true" to #app-root
            $('#app-root').replaceWith($('<div id="app-root" data-server-rendered="true"></div>'));

            // Extract html and return
            context.html = $.html();
            return context;
          },
        }),
      ],
    };
  },

  // IMAGE COMPRESSION
  /* chainWebpack: (config) => {
    const imgRule = config.module.rule('images');
    imgRule.use('file-loader')
           .loader('image-webpack-loader')
           .tap(options => {
               const ret = options || {};
               ret.bypassOnDebug = true;
               ret.pngquant = {
                   quality: '65-90',
                   speed: 4
               };
        return ret;
    })
  }, */

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/style/base/variables.scss";`
      }
    }
  },

  // https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {
    name: 'BasedGhostDevelopment',
    themeColor: '#61dafb',
    msTileColor: '#f7f7f7',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-180x180.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
    workboxOptions: {
      cacheId: 'basedghost',
      importWorkboxFrom: 'local',
      navigateFallback: 'index.html',
      navigateFallbackWhitelist: [/^((?!\/404).)*$/],
    },
  },
};