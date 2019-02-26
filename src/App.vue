<template>
    <div id="app-root">
        <nav-bar></nav-bar>
        <transition :name="$route.meta.transitionName" mode="out-in">
            <router-view></router-view>
        </transition>
        <div v-if="showBackToTop" id="back-to-top" @click="backToTop()">
              <font-awesome-icon class="back-to-top-icon" icon="chevron-up"></font-awesome-icon>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppFooter from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
import scrollTo from './util/scrolling/smooth-scroll';
import { sfcGlobalData } from './config/constants';

@Component({
    components: {
        NavBar,
        AppFooter
    }
})
export default class App extends Vue {
    public readonly sfcData = sfcGlobalData;

    private scrolled: boolean = false;
    private isMobileDevice: boolean = false;

    public created(): void {
        this.checkForMobileDevice();
    }

    public beforeDestroy(): void {
        this.destroy();
    }

    get showBackToTop(): boolean {
        return this.isMobileDevice && this.scrolled;
    }

    public handleScroll(): void {
        this.scrolled = window.scrollY > 0;
    }

    public backToTop(): void {
        const appRootElem = document.getElementById('app-root');
        if (appRootElem) {
            scrollTo(appRootElem);
        }
    }

    private destroy(): void {
        window.removeEventListener('scroll', this.handleScroll, false);
    }

    private checkForMobileDevice(): void {
        const tempIsMobileDevice = (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        if (tempIsMobileDevice) {
            this.isMobileDevice = tempIsMobileDevice;
            window.addEventListener('scroll', this.handleScroll, false);
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/style/main.scss';
</style>
