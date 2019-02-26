<template>
    <section class="container">
        <div class="tile is-parent is-8 is-vertical is-archive-tile-parent">
            <div class="notification is-warning tile is-child has-text-centered">
                <font-awesome-icon icon="exclamation-circle" size="2x"></font-awesome-icon>
                <span class="title">Site In Development</span>
            </div>
            <div class="tile is-child">
                <h1 class="title">Post Archive</h1>
                <hr>
            </div>
            <div class="tile is-child box">
                <div class="blog-thumbnail is-flex is-horizontal-center">
                    <figure class="entry-thumbnail">
                        <img class="is-centered" src="../assets/img/react-aspcore.png" alt="">
                    </figure>
                </div>
                <p class="subtitle is-tile-subtitle has-text-centered">Building a SPA template with the following technology stack:</p>
                <p class="subtitle is-tile-subtitle has-text-centered">
                    <a class="library-link" target="_blank" rel="noopener" :href="vendorUrls.reactUrl">React</a>
                    <span> + </span>
                    <a class="library-link" target="_blank" rel="noopener" :href="vendorUrls.reduxUrl">Redux</a>
                    <span> + </span>
                    <a class="library-link" target="_blank" rel="noopener" :href="vendorUrls.typescriptUrl">TypeScript</a>
                    <span> and </span>
                    <a class="library-link" target="_blank" rel="noopener" :href="vendorUrls.aspcoreUrl">ASP.NET Core 2.2</a>
                </p>
                <div class="subtitle is-tile-content has-text-centered">
                    <a class="button is-source-code-link"
                       target="_blank"
                       rel="noopener"
                       href="https://github.com/based-ghost/aspnet-core-react-redux-playground-template">
                        <span>
                            <font-awesome-icon icon="code"></font-awesome-icon> Source Code
                        </span>  
                    </a>
                </div>
            </div>
            <div class="tile is-child box">
                <div class="blog-thumbnail is-flex is-horizontal-center">
                    <figure class="entry-thumbnail">
                        <img class="is-centered" src="../assets/img/vue-aspcore-2.png" alt="">
                    </figure>
                </div>
                <p class="subtitle is-tile-subtitle has-text-centered">Building a SPA template with the following technology stack:</p>
                <p class="subtitle is-tile-subtitle has-text-centered">
                    <a class="library-link" target="_blank" rel="noopener" :href="vendorUrls.vueUrl">Vue</a>
                    <span> + </span>
                    <a class="library-link" target="_blank" rel="noopener" :href="vendorUrls.vuexUrl">Vuex</a>
                    <span> + </span>
                    <a class="library-link" target="_blank" rel="noopener" :href="vendorUrls.typescriptUrl">TypeScript</a>
                    <span> and </span>
                    <a class="library-link" target="_blank" rel="noopener" :href="vendorUrls.aspcoreUrl">ASP.NET Core 2.2</a>
                </p>
                <div class="subtitle is-tile-content has-text-centered">
                    <a class="button is-source-code-link"
                       target="_blank"
                       rel="noopener"
                       href="https://github.com/based-ghost/aspnet-core-vue-vuex-playground-template">
                        <span>
                            <font-awesome-icon icon="code"></font-awesome-icon> Source Code
                        </span>                   
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { vendorConfig } from '../config/constants';
import { RoutesConfig } from '../config/routes.config';

@Component({
    metaInfo() {
        return {
            title: RoutesConfig.Archive.meta.metaInfo.title,
            titleTemplate: RoutesConfig.Archive.meta.metaInfo.titleTemplate,
            meta: [
                {
                    property: 'og:title',
                    content: RoutesConfig.Archive.meta.metaInfo.title,
                    template: RoutesConfig.Archive.meta.metaInfo.titleTemplate,
                    vmid: 'og:title'
                },
                {
                    property: 'og:description',
                    content: RoutesConfig.Archive.meta.metaInfo.description,
                    vmid: 'og:description'
                },
                {
                    name: 'description',
                    content: RoutesConfig.Archive.meta.metaInfo.description
                }
            ]
        }
    }
})
export default class Archive extends Vue {
    public readonly vendorUrls = vendorConfig;
}
</script>