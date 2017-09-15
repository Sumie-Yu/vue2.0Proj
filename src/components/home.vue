<template>

    <div id="tmpl">
        <!--1.0 Mint UI 轮播图-->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in list">
                <img :src="item.albums">
            </mt-swipe-item>
        </mt-swipe>

        <!--2.0 MUI实现导航-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newslist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodslist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/feedback">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/video">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/callus">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import common from '../kits/commen.js';
    export default({
        data(){
            return {
                list: []
                /*                list: [
                 {
                 "url": "",
                 "img": "https://img14.360buyimg.com/babel/jfs/t8662/51/903166445/124639/a6cf1328/59b13c19Ne9707153.jpg"
                 },
                 {
                 "url": "",
                 "img": "https://img1.360buyimg.com/da/jfs/t9181/141/1198104284/151697/caaa1a0d/59b6369bN03fc61f7.jpg"
                 },
                 {
                 "url": "",
                 "img": "https://img12.360buyimg.com/da/jfs/t8926/111/400186648/32793/26047069/59a7a48dNf1d0e98e.jpg"
                 }
                 ]*/
            }
        },
        created(){
            //当页面中的data methods对象都创建完后，会自动调用created
            this.getimgs();
        },
        methods: {
            getimgs(){
                //实现轮播组件中的数据请求
                // 1.0 确定URL
                var url = common.apidomain;
                this.$http.jsonp(url).then(function (response) {
                    var data = response.body;
                    //错误处理
                    if (data.resultcode != 200) {
                        Toast(data.reason);
                        return;
                    }
                    //如果服务器返回的数据正常，则赋值给message
                    this.list = data.result.data;
                });
            }
        }
    });
</script>

<style scoped>
    .mint-swipe {
        height: 250px;
    }

    .mint-swipe-item {
        background: blanchedalmond;
        width: 100%;
        height: 250px;
    }

    .mint-swipe-item img {
        width: 100%;
        height: 250px;
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

    .mui-icon-home:before, .mui-icon-email:before, .mui-icon-chatbubble:before, .mui-icon-location:before, .mui-icon-search:before, .mui-icon-phone:before {
        content: '';
        background-repeat: round;
        display: inline-block;
        width: 50px;
        height: 50px;
    }

    .mui-icon-home:before {
        background-image: url("../../statics/imgs/1.png");
    }

    .mui-icon-email:before {
        background-image: url("../../statics/imgs/2.png");
    }

    .mui-icon-chatbubble:before {
        background-image: url("../../statics/imgs/3.png");
    }

    .mui-icon-location:before {
        background-image: url("../../statics/imgs/4.png");
    }

    .mui-icon-search:before {
        background-image: url("../../statics/imgs/5.png");
    }

    .mui-icon-phone:before {
        background-image: url("../../statics/imgs/6.png");
    }


</style>

