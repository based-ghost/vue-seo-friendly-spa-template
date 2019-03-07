<template>
    <section class="container">
        <div class="tile is-parent is-notification-tile-parent is-vertical is-8">
            <div class="notification is-primary">
                <div class="title">
                    <font-awesome-icon icon="info" /> About Page
                </div>
                <p class="subtitle">About page/application/company description.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { RoutesConfig } from '@/config/routes.config';
    import { buildMetaInfo } from '@/utils/metaInfo';

    @Component({
        metaInfo() {
            return buildMetaInfo(RoutesConfig.About.meta.metaInfo);
        },
    })
    export default class About extends Vue { }
</script>