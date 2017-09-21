<template>
    <div id="tmpl">
        <!--1.0商品轮播图-->
        <div class="slide">
            <slide :imgs="info.stepitem"></slide>
        </div>

        <!--2.0实现商品购买区域-->
        <div id="buy">
            <h3 v-text="info.details.name"></h3>
            <p class="line"></p>
            <ul>
                <li class="price">市场价：<s>￥39.9</s>
                    销售价：<span>￥35.9</span>
                </li>
                <li class="inputli">购买数量：
                    <inputNumber @dataobj="getcount"
                                 class="inputnumber"></inputNumber>
                </li>
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
                <li>食品原料：{{ info.details.marinade }}</li>
                <li>食品描述：{{ info.details.cpdes}}</li>
                <li>上架时间：{{ctime | datafmt('YYYY-MM-DD HH:mm:ss')}}</li>
            </ul>
        </div>
        <!--3.0图文详情-->
        <!--4.0商品评论-->
        <div id="other">
            <router-link v-bind="{to:'/goods/gooddesc/'+ this.listid}">
                <mt-button class="imgdesc" type="primary" size="large">图文详情</mt-button>
            </router-link>
            <router-link v-bind="{to:'/goods/goodcomment/'+ this.listid}">
                <mt-button type="danger" size="large">商品评论</mt-button>
            </router-link>
        </div>
    </div>
</template>

<script>
    import slide from '../subcom/slide.vue';
    import common from '../../kits/common.js';
    import inputNumber from '../subcom/inputNumber.vue';

    export default {
        components: {
            slide,
            inputNumber
        },
        data() {
            return {
                list: [],
                listid: 0,
                info: {},
                ctime: new Date(),
                inputcount: 1
            };
        },
        created() {
            this.id = this.$route.params.id;
            this.getgoodinfo();
            this.getgoodid();
            this.listid;
        },
        methods: {
            getcount(count) {
                this.inputcount = count;
            },
            getgoodinfo() {
                var url = common.apidomaindetail + '&id=' + this.id;
                this.$http.get(url).then(function (res) {
                    this.info = res.body.showapi_res_body;
                });
            },
            getgoodid() {
                var url = common.apidomain;
                this.$http.get(url).then(function (res) {
                    this.list = res.body.showapi_res_body.list;
                    for (var i = 0; i < this.list.length; i++) {
                        if (this.list[i].name == this.info.details.name) {
                            this.listid = this.list[i].id;
                        }
                    }
                    console.log('A' + this.info.details.name);
                    console.log('B' + this.list[0].name);
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

    .inputli {
        position: relative;
    }

    .inputnumber {
        position: absolute;
        left: 110px;
        top: 5px;
    }

</style>

