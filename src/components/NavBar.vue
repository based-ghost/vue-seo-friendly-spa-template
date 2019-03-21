<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-wrapper">
            <div class="brand-wrapper">
                <img src="../assets/img/vue-seo-template.png" width="215" alt="">
            </div>
            <div id="navbar-routes" class="navbar-routes">
                <router-link :to="routes.Home.path" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon :icon="routes.Home.meta.icon" />
                    </span>
                    <span>{{routes.Home.displayName}}</span>
                </router-link>
                <router-link :to="routes.About.path" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon :icon="routes.About.meta.icon" />
                    </span>
                    <span>{{routes.About.displayName}}</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { routesConfig } from '@/config/routes.config';

    @Component
    export default class NavBar extends Vue {
        private readonly routes = routesConfig;
    }
</script>