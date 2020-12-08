<template>
  <div class="view-wrapper">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="is-flex is-horizontal-center">
            <figure class="image is-158x158">
              <font-awesome-icon class="vue-svg" :icon="['fab', 'vuejs']" />
            </figure>
          </div>
          <h1 class="title blog-title">SEO Friendly SPA</h1>
          <hr>
          <h2 v-for="(feature, index) in featureList" :key="index" class="subtitle">
            <font-awesome-icon icon="check" />
            {{feature.description}}
            <code v-if="feature.package">
              {{feature.package}}
            </code>
          </h2>
        </div>
      </div>
    </section>
    <section class="container dashboard-content">
      <div class="columns">
        <div class="column">
          <p class="title">vue-meta</p>
          <div class="content">
            <p>
              <code>vue-meta</code> is a Vue 2.0 plugin that allows you to manage your app's meta information, much like react-helmet does for React. However, instead of setting your data as props passed to a proprietary component, you simply export it as part of your component's data using the metaInfo property.
            </p>
            <p>These properties, when set on a deeply nested component, will cleverly overwrite their parent components' metaInfo, thereby enabling custom info for each top-level view as well as coupling meta info directly to deeply nested subcomponents for more maintainable code.</p>
          </div>
        </div>
        <hr>
        <div class="column">
          <p class="title">vue-analytics</p>
          <div class="content">
            <p>
              <code>vue-analytics</code> isn't just a wrapper of the Google Analytics API, but provides a solution to issues that most of the time you don't want to deal with or you not even know you have to deal with.
            </p>
            <p>Features include: Automatic Google Analytics script loading; Automatic page tracking; Event batching; Opt-out from Google Analytics with promise support; Multiple domain ID tracking system; Vuex support; E-commerce API; Vue error exception tracking system; Debugging API.</p>
          </div>
        </div>
        <hr>
        <div class="column">
          <p class="title">prerender-spa-plugin</p>
          <div class="content">
            <p>
              <code>prerender-spa-plugin</code>'s goal is to provide a simple prerendering solution that is easily extensible and usable for any site or single-page-app built with webpack.
            </p>
            <p>Prerendering differs from (SSR) Server Side Rendering. You can get almost all the advantages of it (without the disadvantages) by using prerendering. Prerendering is basically firing up a headless browser, loading your app's routes, and saving the results to a static HTML file. You can then serve it with whatever static-file-serving solution you were using previously. It just works with HTML5 navigation and the likes.</p>
          </div>
        </div>
      </div>
      <hr>
      <div class="columns">
        <div class="column">
          <p class="title">Lorem Ipsum</p>
          <div
            class="content"
          >Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis in. Nam inani malorum epicuri id, illud eleifend reformidans nec cu. Stet meis rebum quo an, ad recusabo praesent reprimique duo, ne delectus expetendis philosophia nam. Mel lorem recusabo ex, vim congue facilisis eu, id vix oblique mentitum. Vide aeterno duo ei. Qui ne urbanitas conceptam deseruisse, commune philosophia eos no. Id ullum reprimique qui, vix ei malorum assueverit contentiones. Nec facilis dignissim efficiantur ad, tantas tempor nam in. Per feugait atomorum ut. Novum appareat ei usu, an usu omnium concludaturque. Et nam latine mentitum, impedit explicari ullamcorper ut est, vis ipsum viderer ei. Porro essent eu per, ut tantas dissentias vim. Dicant regione argumentum vis id, adipisci accusata postulant at vix. Adipisci vituperata ea duo, eu summo detracto mei, et per option periculis. Eos laudem vivendo ex.</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MetaInfoHome } from "@/config/metaInfo.config";
import { FeatureInfoConfig, FeatureInfo } from "@/config/features.config";

@Component({
  metaInfo: MetaInfoHome
})
export default class Home extends Vue {
  public readonly featureList: FeatureInfo[] = Object.values(FeatureInfoConfig);
}
</script>