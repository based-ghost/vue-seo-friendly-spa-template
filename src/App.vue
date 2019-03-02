<template>
    <div id="app-root">
        <component :is="dynamicNavBarComponent" @mobile-overlay="(show) => (showNavMenuOverlay = show)"></component>
        <div :class="{ 'nav-menu-overlay': showNavMenuOverlay }">
            <transition :name="$route.meta.transitionName" mode="out-in">
                <router-view></router-view>
            </transition>
            <div v-if="mobileDeviceScrolled" id="back-to-top" @click="backToTop()">
                <font-awesome-icon class="back-to-top-icon" icon="chevron-up"></font-awesome-icon>
            </div>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppFooter from '@/components/Footer.vue';
import scrollTo from './util/scrolling/smooth-scroll';

@Component({
    components: {
        AppFooter
    }
})
export default class App extends Vue {
    private dynamicNavBarComponent: any;
    private showNavMenuOverlay: boolean = false;
    private mobileDeviceScrolled: boolean = false;

    public created(): void {
        this.checkForMobileDevice();
    }

    public beforeDestroy(): void {
        this.destroy();
    }

    public backToTop(): void {
        scrollTo(document.getElementById('app-root'));
    }


    public handleScroll(): void {
        this.mobileDeviceScrolled = window.scrollY > 0;
    }

    private destroy(): void {
        window.removeEventListener('scroll', this.handleScroll, false);
    }

    private checkForMobileDevice(): void {
        if ((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent || navigator.vendor))) {
            window.addEventListener('scroll', this.handleScroll, false);
            this.dynamicNavBarComponent = () => import('@/components/NavBarMobile.vue');
        } else {
            this.dynamicNavBarComponent = () => import('@/components/NavBar.vue');
        }
    }
}
</script>