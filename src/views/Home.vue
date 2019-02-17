<template>
    <div>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title blog-title"><em class="open-brace">{</em> {{sfcData.TITLE_MSG}} <em class="close-brace">}</em></h1>
                    <h2 class="subtitle">{{sfcData.SUB_TITLE_MSG}}</h2>
                    <hr>
                    <h2 class="subtitle">This SPA is powered by...</h2>
                    <div class="is-flex is-horizontal-center">
                        <img src="../assets/img/vue-bulma.png" alt="">
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
                                            <a class="library-link" @click="$router.push('/posts')">SPA created with React + Redux + TypeScript and ASP.NET Core 2.2</a>
                                        </li>
                                        <li>
                                            <a class="library-link" @click="$router.push('/posts')">SPA created with Vue + Vuex + TypeScript and ASP.NET Core 2.2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="column dashboard-info is-half">
                                <p class="title">Contact / Support</p>
                                <div class="content dashboard-content">
                                    <ul>
                                        <li>
                                            <a class="button github is-dark is-rounded is-outlined"
                                               target="_blank"
                                               rel="noopener"
                                               :href="sfcData.GITHUB_URL">
                                                <span class="icon">
                                                    <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                                                </span>
                                                <span>GitHub (based-ghost)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="button is-rounded coffee">
                                                <span class="icon">
                                                    <font-awesome-icon icon="mug-hot"></font-awesome-icon>
                                                </span>
                                                <span>Buy me a coffee</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="button is-rounded proton"
                                               :href="sfcData.EMAIL">
                                                <span class="icon">
                                                    <font-awesome-icon icon="lock"></font-awesome-icon>
                                                </span>
                                                <span>mareddia@protonmail.com</span>
                                            </a>
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
import { sfcGlobalData } from '../config/constants';
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
                    content: RoutesConfig.Home.meta.metaInfo.title,
                    vmid: 'og:description'
                },
                {
                    name: 'description',
                    content: RoutesConfig.Home.meta.metaInfo.title
                }
            ]
        }
    }
})
export default class Home extends Vue {
    public readonly sfcData = sfcGlobalData;
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/components/home.scss';
</style>