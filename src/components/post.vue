<template>
    <div class="pages_post">
        <h1>{{ pageName }}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Pages_post extends Vue {
    pageName: string = "pages_post";
    postBody: any = {
        mock: {
            respCode: "0000",
            message: "模拟数据",
            data: {
                id: "id",
                name: "cname",
                username: "userName",
                tel: "tel",
                phone: "phone",
                idCard: "idCard",
                bankCard: "bankCard",
                email: "email",
                qq: "qq",
                carNum: "carNum",
                icon: "icon",
                detailAddress: "detailAddress",
                obj: { title: "ctitle", cparagraph: "cparagraph" },
                list: ["cname"],
                list2: [{ image: "image", id: "id" }],
                pageSize: 10,
                totalNum: { totalNumName: 23 },
                curPage: { curPageName: 3 }
            }
        }
    };
    resBody: any = {};
    mounted() {
        this.post();
    }
    post(): void {
        fetch("http://172.21.0.21:3001/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...this.postBody
            })
        })
            .then(data => {
                // in some SAMSUNG mobile data.ok is undefined so add data.status
                if (data.ok || data.status === 200) {
                    return data.json();
                } else {
                    // 未正常返回数据，则抛出异常
                    throw new Error(`响应数据异常，错误码：${data.status}`);
                }
            })
            .then(data => {
                return data;
            })
            .catch(function(e) {
                console.log("fetch fail", JSON.stringify(e));
            });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.pages_post {
}
</style>
