/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const cheerio = require("cheerio");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  lintOnSave: false,

  // define port
  devServer: {
    // proxy: 'http://160.153.250.157:33000', // option A
    // host: 'http://localhost', // option B
    port: "3000", // option C - recommended
    hot: true,
    disableHostCheck: true
  },

  // https://cli.vuejs.org/guide/webpack.html
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") {
      return {};
    }

    return {
      performance: {
        hints: false
      },
      plugins: [
        // https://github.com/chrisvfritz/prerender-spa-plugin
        new PrerenderSPAPlugin({
          staticDir: config.output.path,
          routes: ["/", "/about"],
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({}),
          postProcess(context) {
            if (context.route === "/404") {
              context.outputPath = path.join(config.output.path, "/404.html");
            }

            // Add 'data-server-rendered' attribute so app knows to hydrate with any changes
            const $ = cheerio.load(context.html);
            $("#app").attr("data-server-rendered", "true");
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
    themeColor: "#67dea9",
    msTileColor: "#ffffff",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      cacheId: "VueSeoSpa",
      exclude: [/_redirects/],
      navigateFallback: "/index.html",
      navigateFallbackWhitelist: [/^((?!\/404).)*$/]
    }
  }
};
