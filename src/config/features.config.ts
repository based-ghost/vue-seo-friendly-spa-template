export type Feature = Readonly<{
  description: string;
  package_name?: string;
}>;

export const FEATURES: Feature[] = [
  {
    description: 'UI styled with Bulma + SASS + Font Awesome 5 (svg-core)'
  },
  {
    description: 'Configured as a (PWA) Progressive Web App'
  },
  {
    description: 'Meta tags dynamically handled per route using',
    package_name: 'vue-meta'
  },
  {
    description: 'Global Site Tag plugin already configured',
    package_name: 'vue-gtag-next'
  },
  {
    description: 'Configured to serve prerendered html using',
    package_name: 'prerender-spa-plugin'
  }
];