/* eslint-disable no-param-reassign,import/no-extraneous-dependencies */
const path = require("path");
const cheerio = require("cheerio");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  // define port
  devServer: {
    //proxy: 'http://160.153.250.157:33000', // option A
    //host: 'http://localhost', // option B
    port: '3000', // option C - recommended
    hot: true,
    disableHostCheck: true
  },

  // https://github.com/visualfanatic/vue-svg-loader
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end()
      .end()
      .oneOf("external")
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 10240,
        name: "assets/[name].[hash:8].[ext]"
      });
  },

  // https://cli.vuejs.org/guide/webpack.html
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") {
      return {};
    }

    return {
      performance: {
        hints: false,
      },
      plugins: [
        // https://github.com/chrisvfritz/prerender-spa-plugin
        new PrerenderSPAPlugin({
          staticDir: config.output.path,
          routes: ["/", "/about", "/404"],
          renderAfterDocumentEvent: 'prerender-event',
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({}),
          postProcess(context) {
            if (context.route === "/404") {
              context.outputPath = path.join(config.output.path, "/404.html");
            }

            // Remove google analytics script (will be readded by client)
            // Add data-server-rendered="true" to #app (dynamically add here rather than hard code in index.html)
            const $ = cheerio.load(context.html);
            $('head').children('script[src*="google-analytics"]').remove();
            $('#app').attr('data-server-rendered', 'true');
            context.html = $.html();

            return context;
          }
        })
      ]
    };
  },

  // https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {
    name: "VueSeoFriendlySpaTemplate",
    msTileColor: "#fff",
    themeColor: "#67dea9",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      cacheId: "VueSeoSpa",
      importWorkboxFrom: "local",
      navigateFallback: "/index.html",
      navigateFallbackWhitelist: [/^((?!\/404).)*$/]
    }
  }
};
