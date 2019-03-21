<template>
    <div class="pages_post flex column">
        <div class="post_hd">
            <div class="hd_tool flex center">
                <div class="hd_left flex center flex1">
                    <div class="hd_method">{{postForm.method}}</div>
                    <input class="hd_url flex1" v-model="postForm.url">
                </div>
                <div class="hd_send btn mg_l_10" @click="post">Send</div>
            </div>
        </div>
        <div class="hd_btn mg_t_10">
            <div class="btn" @click="setReq('normal')">常用数据</div>
            <div class="btn mg_l_10" @click="setReq('page')">分页数据</div>
            <div class="btn mg_l_10" @click="setReq('diyPage')">自定义分页名称</div>
            <div class="btn mg_l_10" @click="setReq('dataType')">数据类型</div>
            <div class="btn mg_l_10" @click="setReq('mockapi')">mockapi</div>
        </div>
        <div class="post_headers">
            headers: { "Content-Type": "application/json" },
        </div>
        <div class="post_bd flex1 flex" :class="{'column': clientWidth<1080}">
            <div class="bd_req flex1">
                <pre class="text_req" contenteditable="true" v-html="reqData"></pre>
                <textarea class="text_req" name="text_req" id="text_req" @keydown.tab="inputTab($event)" v-model="reqBody"></textarea>
            </div>
            <div class="bd_res flex1 scrollbar">
                <pre contenteditable="true" v-html="resData"></pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { initData } from '../resource/js/init'

Vue.config.errorHandler = function (err, vm, info) {
    vm.$data.resBody = {
        '异常信息': err.message,
        '异常名称': err.name,
        '异常脚本url': err.script,
        '异常行号': err.line,
        '异常列号': err.column,
        '异常堆栈信息': err.stack,
        'handle ': info,
    };
}
@Component({
    directives: {}
})
export default class Pages_post extends Vue {
    pageName: string = "pages_post";
    postForm: any = {
        method: "POST",
        // url: "http://mock.91525.net:35001/",
        url: "http://172.21.0.21:3001/",
    };
    reqBody: any = '{\n\t"mock": {\n\t\t"id":"id"\n\t}\n}';
    resBody: any = {};
    get reqData(): string {
        return this.syntaxHighlight(this.reqBody);
    }
    get resData(): string {
        return this.syntaxHighlight(this.resBody);
    }
    get clientWidth(): number {
        return document.documentElement.clientWidth;
    }
    mounted() {
        this.post();
    }
    jsonFormat(json: any): string {
        return JSON.stringify(json, undefined, 4);
    }
    setReq(type) {
        switch(type){
            case 'normal':
                this.reqBody = this.jsonFormat(initData[type]);
                break;
            case 'page':
                this.reqBody = this.jsonFormat(initData[type]);
                break;
            case 'diyPage':
                this.reqBody = this.jsonFormat(initData[type]);
                break;
            case 'dataType':
                this.reqBody = this.jsonFormat(initData[type]);
                break;
            case 'mockapi' :
                this.reqBody = this.jsonFormat(initData[type]);
                break;
        }
        this.post();
    }
    post(): void {
        fetch(this.postForm.url, {
            method: this.postForm.method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                JSON.parse(this.reqBody.replace(/\n/g,'').replace(/\t/g,''))
            )
        })
            .then((data: any) => {
                // in some SAMSUNG mobile data.ok is undefined so add data.status
                if (data.ok || data.status === 200) {
                    return data.json();
                } else {
                    // 未正常返回数据，则抛出异常
                    throw new Error(`响应数据异常，错误码：${data.status}`);
                }
            })
            .then((data: any) => {
                this.resBody = data;
                return data;
            })
            .catch((error: any) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
                this.resBody = JSON.stringify(error);
                return error;
            });
    }
    inputTab(e: any): void {
        let selectionStart = e.target.selectionStart;
        let selectionEnd = e.target.selectionEnd;
        let pos = selectionStart + 2;
        e.target.value = e.target.value.substr(0, selectionStart) + "\t" + e.target.value.substr(selectionStart);
        e.target.selectionStart = e.target.selectionEnd = pos-1;
        e.target.focus();
        e && e.preventDefault();
    }
    syntaxHighlight(json: any): string {
        if (typeof json != "string") {
            json = this.jsonFormat(json);
        }
        json = json
            .replace(/&/g, "&")
            .replace(/</g, "<")
            .replace(/>/g, ">");
        return json.replace(
            /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            function(match: any) {
                var cls = "number";
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = "key";
                    } else {
                        cls = "string";
                    }
                } else if (/true|false/.test(match)) {
                    cls = "boolean";
                } else if (/null/.test(match)) {
                    cls = "null";
                }
                return '<span class="' + cls + '">' + match + "</span>";
            }
        );
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.pages_post {
    height: 100vh;
    padding: 20px;
    .post_hd {
        .hd_tool {
            height: 40px;
            .hd_left {
                border-radius: 5px;
                border: 1px solid #666;
                background: #404040;
                box-sizing: content-box;
                overflow: hidden;
                .hd_method,
                .hd_url {
                    line-height: 40px;
                    text-indent: 10px;
                    &:active,
                    &:hover,
                    &:focus {
                        background: #282828;
                        outline: 0;
                    }
                }
                .hd_method {
                    cursor: pointer;
                    width: 100px;
                    border-right: 1px solid #666;
                }
                .hd_url {
                    color: #eee;
                    background: #404040;
                    border: 0;
                    box-sizing: border-box;
                }
            }
        }
    }
    .post_headers{       
        margin-top: 10px; 
        border-radius: 5px;
        border: 1px solid #404040;
        background: #282828;
        padding: 10px;
    }
    .post_bd {
        margin-top: 10px;
        .bd_req,
        .bd_res {
            overflow: auto;
            border-radius: 5px;
            border: 1px solid #404040;
            background: #282828;
            padding: 20px;
            .text_req,pre {
                border: 0;
                color: #fff;
                background: #282828;
                width: 100%;
                height: 100%;
                line-height: 1.6;
                &:active,
                &:hover,
                &:focus {
                    outline: 0;
                }
            }
            textarea.text_req{
                color: #ffffff00;
                caret-color: #fff;
                transform: translate(0,-100%);
                background: transparent;
                letter-spacing: 0.4px;
                line-height: 1.7;
                overflow: hidden;
                margin-left: 2px;
            }
        }
    }
}
</style>
