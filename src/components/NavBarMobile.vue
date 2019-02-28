<template>
    <div class="navbar is-mobile" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="brand-wrapper-mobile">
                <img src="../assets/img/based-ghost-blog-logo.png" width="220" alt="">
            </div>      
            <a role="button" aria-label="menu" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen" :class="['navbar-burger', { 'is-active': menuOpen }]">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div :class="['navbar-menu', { 'is-active': menuOpen }]">
            <div>
                <router-link :to="routesConfig.Home.path" @click.native="handleMobileRouteEvent" class="navbar-item-mobile">
                    <span>{{routesConfig.Home.displayName}}<font-awesome-icon :icon="routesConfig.Home.meta.icon"></font-awesome-icon></span>
                </router-link>
                <router-link :to="routesConfig.Archive.path" @click.native="handleMobileRouteEvent" class="navbar-item-mobile">
                    <span>{{routesConfig.Archive.displayName}}<font-awesome-icon :icon="routesConfig.Archive.meta.icon"></font-awesome-icon></span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RoutesConfig } from '../config/routes.config';

@Component
export default class NavBarMobile extends Vue {
    public menuOpen: boolean = false;
    public readonly routesConfig = RoutesConfig;

    public handleMobileRouteEvent(): void {
        Vue.nextTick(() => {
            this.menuOpen = false;
        });
    }
}
</script>