<template>
    <div>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title blog-title"><em class="chevron"><font-awesome-icon icon="chevron-right"></font-awesome-icon></em><span>code-blog</span></h1>
                    <h2 class="subtitle blog-intro">Matt Areddia - a Full-Stack .NET developer based out of Milwaukee, WI</h2>
                    <hr>
                    <h2 class="subtitle">Powered by...</h2>
                    <div class="is-flex is-horizontal-center">
                        <img src="../assets/img/vue-github-netlify-labeled.png" alt="" width="550">
                    </div>
                </div>
            </div>
        </section>
        <section class="container">
            <div class="card home-card">
                <div class="card-content">
                    <div class="column">
                        <div class="columns">
                            <div class="column dashboard-info is-half">
                                <p class="title">Recent Posts</p>
                                <div class="content dashboard-content">
                                    <ul class="recent-posts">
                                        <li>
                                            <a class="library-link" @click="$router.push('/posts/')">SPA created with Vue + Vuex + TypeScript and ASP.NET Core 2.2</a>
                                        </li>
                                        <li>
                                            <a class="library-link" @click="$router.push('/posts/')">SPA created with React + Redux + TypeScript and ASP.NET Core 2.2</a>
                                        </li>
                                        <li>
                                            <a class="library-link" @click="$router.push('/posts/')">SEO best practices for SPAs and achieving a perfect 'Lighthouse' score</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr class="stacked-column-seperator">
                            <div class="column dashboard-info is-fourth">
                                <p class="title">Contact</p>
                                <div class="content dashboard-content">
                                    <ul class="fa-ul">
                                        <li>
                                            <span class="fa-li">
                                                <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                                            </span>
                                            <a class="library-link" target="_blank" rel="noopener" :href="urlData.GITHUB">GitHub (based-ghost)</a>                                            
                                        </li>
                                        <li>
                                            <span class="fa-li">
                                                <font-awesome-icon icon="mail-bulk"></font-awesome-icon>
                                            </span>
                                            <a class="library-link" :href="urlData.EMAIL">mareddia@protonmail.com</a>                                         
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr class="stacked-column-seperator">
                            <div class="column dashboard-info is-fourth">
                                <p class="title">Support</p>
                                <div class="content dashboard-content">
                                    <ul class="fa-ul">
                                        <li>
                                            <span class="fa-li">
                                                <font-awesome-icon icon="mug-hot"></font-awesome-icon>
                                            </span>
                                            <a class="library-link">Buy me a coffee</a>                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { urlConfig } from '../config/constants';
import { RoutesConfig } from '../config/routes.config';

@Component({
    metaInfo() {
        return {
            title: RoutesConfig.Home.meta.metaInfo.title,
            titleTemplate: RoutesConfig.Home.meta.metaInfo.titleTemplate,
            meta: [
                {
                    property: 'og:title',
                    content: RoutesConfig.Home.meta.metaInfo.title,
                    template: RoutesConfig.Home.meta.metaInfo.titleTemplate,
                    vmid: 'og:title'
                },
                {
                    property: 'og:description',
                    content: RoutesConfig.Home.meta.metaInfo.description,
                    vmid: 'og:description'
                },
                {
                    name: 'description',
                    content: RoutesConfig.Home.meta.metaInfo.description
                }
            ]
        }
    }
})
export default class Home extends Vue {
    private readonly urlData = urlConfig;
}
</script>