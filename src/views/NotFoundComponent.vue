<template>
    <section class="container">
        <div class="tile is-parent is-8 is-vertical is-not-found-tile-parent">
            <div class="notification is-danger tile is-child has-text-centered">
                <div>
                    <font-awesome-icon icon="exclamation-circle" size="2x"></font-awesome-icon>
                    <span class="title">404 Not Found</span>
                </div>
                <p class="subtitle">The requested page could not be found.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    metaInfo() {
        return {
            title: '',
            titleTemplate: '',
            meta: [
                {
                    property: 'og:title',
                    content:  '',
                    template: '',
                    vmid: 'og:title'
                },
                {
                    property: 'og:description',
                    content: '',
                    vmid: 'og:description'
                },
                {
                    name: 'description',
                    content: ''
                }
            ]
        }
    }
})
export default class NotFoundComponent extends Vue {
    public mounted(): void {
        if (window.location.pathname !== '/404') {
            window.location.href = '/404';
        }
    }
}
</script>