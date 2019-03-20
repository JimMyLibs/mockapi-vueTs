<template>
    <div class="pages_template">
        <h1>{{ pageName }}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Pages_template extends Vue {
    pageName: string = "pages_template";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.pages_template {
    
}
</style>
