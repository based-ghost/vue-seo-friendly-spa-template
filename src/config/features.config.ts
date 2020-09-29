export interface FeatureInfo {
  package?: string;
  description: string;
};

export const FeatureInfoConfig: Record<string, FeatureInfo> = {
  typescript: {
    description: 'TypeScript + class-based component syntax'
  },
  css: {
    description: 'UI styled with Bulma CSS + SASS + Font Awesome 5 (svg-core)'
  },
  pwa: {
    description: 'Configured as a (PWA) Progressive Web App'
  },
  vmeta: {
    description: 'Meta tags dynamically handled per route using',
    package: 'vue-meta'
  },
  vanalytics: {
    description: 'Google Analytics ready to go and easily configurable using',
    package: 'vue-analytics'
  },
  prerender: {
    description: 'Configured to serve prerendered html using',
    package: 'prerender-spa-plugin'
  },
  vsvg: {
    description: 'Configured to allow loading of your own SVG images using',
    package: 'vue-svg-loader'
  },
};