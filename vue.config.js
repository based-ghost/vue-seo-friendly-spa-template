/* eslint-disable no-param-reassign,import/no-extraneous-dependencies */
const path = require('path');
const cheerio = require('cheerio');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  // https://cli.vuejs.org/guide/webpack.html
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      return {};
    }
    return {
      plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
            //"sourceMap": false
        }),
        // https://github.com/webpack-contrib/copy-webpack-plugin
        new CopyWebpackPlugin([
          {
            from: 'public/manifest.json',
            to: 'manifest.webmanifest',
          },
          // Necessary for `vue-cli-service build --modern`,
          // or data isn’t available for Prerender SPA plugin.
          // {
          //   from: 'public/data/default.json',
          //   to: 'data/default.json',
          // },
        ]),
        // https://github.com/chrisvfritz/prerender-spa-plugin
        new PrerenderSPAPlugin({
          staticDir: config.output.path,
          routes: ['/', '/posts'],
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
            renderAfterDocumentEvent: 'rendered',
          }),
          postProcess(context) {
            if (context.route === '/404') {
              context.outputPath = path.join(config.output.path, '/404.html');
            }
            const $ = cheerio.load(context.html);
            $('[src*="https://www.google-analytics.com/analytics.js"]').remove();
            context.html = $.html();
            return context;
          },
        }),
      ],
    };
  },

  // https://cli.vuejs.org/guide/html-and-static-assets.html#relative-path-imports
  // chainWebpack: (config) => {
  //   config.module.rules.delete('svg');
  //   config.module.rule('images')
  //    . test(/\.(svg|png|jpe?g|gif|webp)(\?.*)?$/);
  // },

  chainWebpack: (config) => {
    config.module.rule('images')
     .test(/\.(svg|png|jpe?g|gif|webp)(\?.*)?$/);
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/assets/style/base/variables.scss";`
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
      cacheId: 'BasedGhostDevelopment',
      importWorkboxFrom: 'local',
      navigateFallback: 'shell.html',
      navigateFallbackWhitelist: [/^((?!\/404).)*$/],
    },
  },
};