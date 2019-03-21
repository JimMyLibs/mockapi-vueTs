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
.btn {
    display: inline-block;
    border-radius: 5px;
    box-sizing: content-box;
    overflow: hidden;
    padding: 0 20px;
    line-height: 40px;
    background: #1890ff;
    text-align: center;
    cursor: pointer;
    user-select: none;
    &:hover,&:focus {
        background: #40a9ff;
    }
    &:active,&.active {
        background-color: #096dd9;
    }
}
.mg_t_10{
    margin-top: 10px;
}
.mg_l_10{
    margin-left: 10px;
}
pre {
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
