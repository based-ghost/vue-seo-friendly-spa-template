<template functional>
    <footer class="footer">
        <hr>
        <div class="buttons">
            <a class="button is-medium" aria-label="Twitter">
                <span class="icon">
                    <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
                </span>
            </a>
            <a class="button is-medium"
               target="_blank"
               rel="noopener"
               aria-label="GitHub"
               :href="parent.sfcData.GITHUB_URL">
                <span class="icon">
                    <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                </span>
            </a>
        </div>
        <div class="content">{{parent.sfcData.FOOTER_TEXT}}</div>
    </footer>
</template>
