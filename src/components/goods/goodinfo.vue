<template>
    <div id="tmpl">
        <!--1.0商品轮播图-->
        <div class="slide">
            <slide :imgs="imgs"></slide>
        </div>

        <!--2.0实现商品购买区域-->
        <div id="buy">
            <h3 v-text="info.name"></h3>
            <p class="line"></p>
            <ul>
                <li class="price">市场价：<s>￥39.9</s>
                    销售价：<span>￥35.9</span>
                </li>
                <li>购买数量：</li>
                <li>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <div id="params">
            <h4>商品参数</h4>
            <p class="line"></p>
            <ul>
                <li>食品原料：{{ info.marinade }}</li>
                <li>食品描述：{{ info.cpdes}}</li>
                <li>上架时间：{{ctime | datafmt('YYYY-MM-DD HH:mm:ss')}}</li>
            </ul>
        </div>
        <!--3.0图文详情-->
        <!--4.0商品评论-->
        <div id="other">
            <router-link v-bind="{to:'/goods/gooddesc/'+ info.name}">
                <mt-button class="imgdesc" type="primary" size="large">图文详情</mt-button>
            </router-link>
            <mt-button type="danger" size="large">商品评论</mt-button>

        </div>
    </div>
</template>

<script>
    import slide from '../subcom/slide.vue';
    import common from '../../kits/common.js';
    export default{
        components: {
            slide
        },
        data(){
            return {
                name: '',
                imgs: [],
                info: {},
                ctime: new Date()
            };
        },
        created(){
            this.name = this.$route.params.name;
            this.getgoodimgs();
            this.getgoodinfo();
        },
        methods: {
            getgoodimgs(){
                var url = common.apidomaindetail + '&name=' + this.name;
                this.$http.get(url).then(function (res) {
                    this.imgs = res.body.showapi_res_body.stepitem;
                });
            },
            getgoodinfo(){
                var url = common.apidomaindetail + '&name=' + this.name;
                this.$http.get(url).then(function (res) {
                    this.info = res.body.showapi_res_body.details;
                });
            }
        }
    };
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .slide {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        margin: 5px;
        padding: 5px;
    }

    #buy, #params {
        margin: 5px;
        padding: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }

    #buy li, #params li {
        list-style: none;
        padding: 5px;
    }

    #buy li {
        font-size: 16px;
    }

    #params li {
        font-size: 14px;
    }

    #buy h3 {
        color: #0094ff;
        padding: 5px;
        margin-top: 5px;
    }

    #params h4 {
        padding: 5px;
        margin-top: 5px;
    }

    .line {
        height: 1px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    #buy .price span {
        color: red;
    }

    #buy .price s {
        padding-right: 15px;
    }

    #other .imgdesc {
        margin-bottom: 20px;

    }

</style>

