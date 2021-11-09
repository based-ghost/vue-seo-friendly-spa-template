export type Package = Readonly<{
  package_name: string;
  description_1: string;
  description_2: string;
}>;

export const PACKAGES: Package[] = [
  {
    package_name: 'vue-gtag-next',
    description_1: `the global site tag (gtag.js) is a JavaScript tagging framework and API that allows you to send event data to Google Analytics, Google Ads, and Google Marketing Platform.`,
    description_2: `For general gtag.js documentation, read the gtag.js developer guide provided by Google.`,
  },
  {
    package_name: 'vue-meta',
    description_1: `is a Vue plugin that allows you to manage your app's meta information, much like react- helmet does for React.However, instead of setting your data as props passed to a proprietary component, you simply export it as part of your component's data using the metaInfo property.`,
    description_2: `These properties, when set on a deeply nested component, will cleverly overwrite their parent components' metaInfo, thereby enabling custom info for each top-level view as well as coupling meta info directly to deeply nested subcomponents for more maintainable code.`,
  },
  {
    package_name: 'prerender-spa-plugin',
    description_1: `'s goal is to provide a simple prerendering solution that is easily extensible and usable for any site or single-page-app built with webpack.`,
    description_2: `Prerendering differs from (SSR) Server Side Rendering. You can get almost all the advantages of it (without the disadvantages) by using prerendering. Prerendering is basically firing up a headless browser, loading your app's routes, and saving the results to a static HTML file. You can then serve it with whatever static-file-serving solution you were using previously. It just works with HTML5 navigation and the likes.`,
  },
];