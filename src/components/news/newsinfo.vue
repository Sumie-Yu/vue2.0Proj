<template>
    <div id="tmpl">
        <!--1.0 实现新闻详情-->
        <div class="title">
            <h4 v-text="info.name">{{id}}</h4>
            <p>
                <span>{{ ctime | datafmt('YYYY-MM-DD HH:mm:ss')}}</span>
                <span>{{ info.view }}次浏览</span>
            </p>
        </div>
        <div class="content" v-text="info.cpdes"></div>
        <!-- 2.0 实现评论组件的集成-->
        <comment :id="id"></comment>

    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import common from '../../kits/common.js';
    import comment from '../subcom/comment.vue';
    export default{
        components: {
            comment //注册评论组件
        },
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
                var url = common.apidomaindetail + '&id=' + this.id;
                this.$http.get(url).then(function (response) {
                        var body = response.body;
                        this.info = body.showapi_res_body.details;
                            /*var infors = body.result.data;
                             for (var i = 0; i <= infors.length; i++) {
                             if (this.id == infors[i].id) {
                             this.info = infors[i];
                             return;*/
                    }
                )
            }
        }
    }
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

