<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-wrapper">
            <div class="brand-wrapper">
                <img src="../assets/img/based-ghost-blog-logo.png" width="230" alt="">
            </div>
            <div class="navbar-routes">
                <router-link :to="routesConfig.Home.path" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon :icon="routesConfig.Home.meta.icon"></font-awesome-icon>
                    </span>
                    <span>{{routesConfig.Home.displayName}}</span>
                </router-link>
                <router-link :to="routesConfig.Archive.path" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon :icon="routesConfig.Archive.meta.icon"></font-awesome-icon>
                    </span>
                    <span>{{routesConfig.Archive.displayName}}</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RoutesConfig } from '../config/routes.config';

@Component
export default class NavBar extends Vue {
    public readonly routesConfig = RoutesConfig;
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/components/navbar.scss';
</style>