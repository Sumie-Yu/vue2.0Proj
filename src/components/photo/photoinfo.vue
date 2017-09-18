<template>
    <div id="tmpl">
        <!--1.0 图片详情和缩略图-->
        <div id="desc">
            <!--1)图片详情-->
            <div class="title">
                <h4>{{photoinfo.name}}</h4>
                <span>{{date | datafmt('YYYY-MM-DD HH:mm:ss')}}</span>
                <span>{{photoinfo.view}}次浏览</span>
                <span>{{photoinfo.collection}}次收藏</span>
                <p class="line"></p>
            </div>
            <p>简介：{{photoinfo.cpdes}}</p>
            <p>材料：{{photoinfo.marinade}}</p>
            <!--2)图片缩略图-->
            <div class="mui-content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <img src="http://images.meishij.net/p/20121112/65907b2c9c55b96276aeed7f940ab981.jpg">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!--2.0 集成评论组件-->
        <div id="comment">
            <comment :id="id"></comment>
        </div>
    </div>
</template>

<script>
    /*导入评论组件 => 注册评论组件 => 使用评论组件*/
    import comment from '../subcom/comment.vue';
    import common from '../../kits/common'
    import {Toast} from 'mint-ui';
    export default{
        components: {
            comment
        },
        data(){
            return {
                id: 0,
                count: 0,
                date: new Date(),
                photoinfo: {}
            };
        },
        created(){
            this.id = this.$route.params.id;
            this.getinfo();
        },
        methods: {
            /*获取图片详细描述数据*/
            getinfo(){
                var url = common.apidomaindetail + '&id=' + this.id;
                this.$http.get(url).then(function (response) {
                        var body = response.body;
                        this.photoinfo = body.showapi_res_body.details;
                    }
                )
            }
        }
    };
</script>

<style scoped>
    /*图片详情*/
    #desc {
        padding: 10px;
    }

    #desc .title h4 {
        color: #0094ff;
    }

    #desc .title span {
        color: rgba(0, 0, 0, 0.4);
        margin-top: 10px;
        font-size: 12px;
        padding-right: 15px;
    }

    #desc .title .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }

    .mui-content, .mui-content ul {
        background-color: white;
    }

    .mui-grid-view.mui-grid-9 {
        border-top: 0px;
        border-left: 0px;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: 0px;
        border-bottom: 0px;
    }

    .mui-content li, .mui-content img {
        width: 100px;
        height: 100px;
    }
</style>

