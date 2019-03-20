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
#app {
    font-family: "microsoft yahei", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
}
</style>
