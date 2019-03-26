<template>
  <div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="blog-title-img is-flex is-horizontal-center">
            <figure class="image is-154x154">
              <img src="@/assets/img/logo.png" alt="" />
            </figure>
          </div>
          <h1 class="title blog-title">SEO Friendly SPA</h1>
          <hr>
          <h2 class="subtitle">
            <font-awesome-icon icon="check"/>TypeScript + class-based component syntax
          </h2>
          <h2 class="subtitle">
            <font-awesome-icon icon="check"/>UI styled with Bulma CSS + SASS + Font Awesome 5 (svg-core)
          </h2>
          <h2 class="subtitle">
            <font-awesome-icon icon="check"/>Configured as a (PWA) Progressive Web App
          </h2>
          <h2 class="subtitle">
            <font-awesome-icon icon="check"/>Meta tags dynamically handled per route using
            <code>vue-meta</code>
          </h2>
          <h2 class="subtitle">
            <font-awesome-icon icon="check"/>Google Analytics ready to go and easily configurable using
            <code>vue-analytics</code>
          </h2>
          <h2 class="subtitle blog-intro">
            <font-awesome-icon icon="check"/>Configured to serve prerendered html using
            <code>prerender-spa-plugin</code>
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
          >Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis in. Nam inani malorum epicuri id, illud eleifend reformidans nec cu. Stet meis rebum quo an, ad recusabo praesent reprimique duo, ne delectus expetendis philosophia nam. Mel lorem recusabo ex, vim congue facilisis eu, id vix oblique mentitum. Vide aeterno duo ei. Qui ne urbanitas conceptam deseruisse, commune philosophia eos no. Id ullum reprimique qui, vix ei malorum assueverit contentiones. Nec facilis dignissim efficiantur ad, tantas tempor nam in. Per feugait atomorum ut. Novum appareat ei usu, an usu omnium concludaturque. Et nam latine mentitum, impedit explicari ullamcorper ut est, vis ipsum viderer ei. Porro essent eu per, ut tantas dissentias vim. Dicant regione argumentum vis id, adipisci accusata postulant at vix. Adipisci vituperata ea duo, eu summo detracto mei, et per option periculis. Eos laudem vivendo ex. Ius alia essent audiam id, mea quando putant id, ex ponderum deterruisset eam. Simul possit ocurreret ne mea, eu illum petentium abhorreant has. Mea ad amet detracto mandamus, no putent mandamus sea. In pri minim quando, harum menandri intellegat vis at. No mei vulputate complectitur, per tamquam delectus complectitur ad. No alia corrumpit usu, cum no tota propriae deterruisset, mea an clita utroque democritum. Debet aliquam blandit ei nec. Usu malis suscipit delectus an, nec summo viris an, duis iriure civibus sed cu. Eos errem dictas id. Cu causae audiam forensibus mea, et audiam omnesque has. Nec et clita ancillae salutandi, in insolens assueverit eum. Cu sed zril adipisci. Per nisl diam ex. Ei vel meis inciderint, vel ei dictas sanctus explicari, nam id odio gubergren. Cum tollit quaestio ei, sit labore meliore accusamus ad, has an dolor utinam. Ne erat facete ius, ludus euripidis eum in, ei duis soluta vocent vix. Quis libris ei nam.</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { routesConfig } from "@/config/routes.config";
import { buildMetaInfo } from "@/utils/metaInfo";

@Component({
  metaInfo() {
    return buildMetaInfo(routesConfig.Home.meta.metaInfo);
  }
})
export default class Home extends Vue {}
</script>