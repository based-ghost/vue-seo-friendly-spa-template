<template>
    <div class="navbar is-mobile" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="brand-wrapper-mobile">
                <img src="../assets/img/based-ghost-blog-logo.png" width="220" alt="">
            </div>      
            <a role="button" aria-label="menu" :aria-expanded="menuOpen" @click="toggleMenu" :class="['navbar-burger', { 'is-active': menuOpen }]">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div :class="['navbar-menu', { 'is-active': menuOpen }]">
            <ul>
                <li>
                    <a role="button" 
                       @click="handleMobileRouteEvent($event, routesConfig.Home.path)" 
                       :class="['navbar-item-mobile', { 'is-active':  this.$router.currentRoute.path === routesConfig.Home.path }]">
                        <span><font-awesome-icon :icon="routesConfig.Home.meta.icon"></font-awesome-icon>{{routesConfig.Home.displayName}}</span>
                    </a>
                </li>
                <hr>
                <li>
                    <a role="button" 
                       @click="handleMobileRouteEvent($event, routesConfig.Archive.path)" 
                       :class="['navbar-item-mobile', { 'is-active':  this.$router.currentRoute.path === routesConfig.Archive.path }]">
                        <span><font-awesome-icon :icon="routesConfig.Archive.meta.icon"></font-awesome-icon>{{routesConfig.Archive.displayName}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RoutesConfig } from '../config/routes.config';

@Component
export default class NavBarMobile extends Vue {
    private menuOpen: boolean = false;
    private readonly routesConfig = RoutesConfig;

    public toggleMenu(): void {
        this.$emit('mobile-overlay', !this.menuOpen);
        this.menuOpen = !this.menuOpen;
    }

    public handleMobileRouteEvent(e: Event, routePath: string): void {
        this.$emit('mobile-overlay', !this.menuOpen);
        this.menuOpen = false;
        this.$nextTick(() => {
            this.$router.push(routePath);
        });
    }
}
</script>