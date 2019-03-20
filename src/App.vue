<template>
    <div id="app">
        <post/>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";
import post from "./components/post.vue";

@Component({
    components: {
        post
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./resource/style/index";
.flex {
    display: flex;
    &.center {
        align-items: center;
    }
    &.column{
        flex-direction: column;
    }
    .flex1 {
        flex: 1;
    }
}
pre {
    font-family: Consolas, "Courier New", monospace;
    .string {
        color: #e6db74;
    }
    .number {
        color: #ae81ff;
    }
    .boolean {
        color: #ae81ff;
    }
    .null {
        color: #f92672;
    }
    .key {
        color: #a6e22e;
    }
}
</style>
