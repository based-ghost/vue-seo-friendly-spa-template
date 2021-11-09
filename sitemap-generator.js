// eslint-disable-next-line @typescript-eslint/no-var-requires
const SitemapGenerator = require("sitemap-generator");
const SITEMAP_URL = "https://www.vueseofriendlyspatemplate.com/";

const generator = SitemapGenerator(SITEMAP_URL, {
  lastMod: true,
  stripQuerystring: true,
  filepath: `${__dirname}/public/sitemap.xml`
});

// Register event listener for 'done'
generator.on("done", () => {
  console.log(`sitemap.xml successfully created for URL: ${SITEMAP_URL}\n`);
});

// Register event listener for 'error'
// ErrorMessage has shape => { code: 404, message: 'Not found.', url: 'http://example.com/foo' }
generator.on("error", err => {
  console.error(`${JSON.stringify(err)}\n`);
});

generator.start();
