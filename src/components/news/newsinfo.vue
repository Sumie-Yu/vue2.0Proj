<template>
    <div id="tmpl" @click="count += 1">
        <div class="title">
            <h4 v-text="info.title"></h4>
            <p>
                <span>{{ ctime | datafmt('YYYY-MM-DD HH:mm:ss')}}</span>
                <span>{{count}}次浏览</span>
            </p>
        </div>
        <div class="content" v-text="info.imtro">
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import common from '../../kits/commen.js';
    export default{
        data(){
            return {
                id: 0,
                info: {},
                ctime: new Date(),
                count: 0
            };
        },
        created(){
            this.id = this.$route.params.id;
            this.getnewsinfo();
        },
        methods: {
            getnewsinfo(){
                var url = common.apidomain;
                this.$http.jsonp(url).then(function (response) {
                    var body = response.body;
                    if (body.resultcode != 200) {
                        Toast(data.reason);
                        return;
                    }
                    var infors = body.result.data;
                    for (var i = 0; i <= infors.length; i++) {
                        if (this.id == infors[i].id) {
                            this.info = infors[i];
                            return;
                        }
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .title h4 {
        color: #0094ff;
    }

    .title p {
        color: rgba(0, 0, 0, 0.5);

    }

    .title p span:last-child {
        margin-left: 20px;
    }

    .title, .content {
        padding: 5px;
    }

    .content {
        text-indent: 2em;
        font-size: 14px;
    }
</style>

