<template>
    <div id="tmpl">
        <!--1.0 利用mui中的图文表格实现-->
        <div id="mui-content" class="mui-content" style="background-color:#fff">
            <ul class="mui-table-view mui-grid-view">
                <li v-for="item in list"
                    class="mui-table-view-cell mui-media mui-col-xs-6">
                    <router-link v-bind="{to:'/goods/goodinfo/'+ item.id}">
                        <img class="mui-media-object" :src="item.img">
                        <div class="mui-media-body" v-text="item.name"></div>
                        <div class="desc">
                            <p>
                                <span>￥30.9</span>
                                <s>42.9</s>
                            </p>
                            <h6 class="left">热卖中</h6>
                            <h6 class="right">剩余53件</h6>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import common from '../../kits/common';
    export default {
        data(){
            return {
                list: []
            };
        },
        created(){
            this.getgoodlist();
        },
        methods: {
            getgoodlist(){
                var url = common.apidomain;
                this.$http.get(url).then(function (res) {
                    this.list = res.body.showapi_res_body.list;
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

    .mui-table-view.mui-grid-view {
        padding: 5px;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell {
        padding: 2px;
    }

    #mui-content li {
        border: 1px solid rgba(0, 0, 0, 0.4);
        -webkit-box-shadow: 0 0 4px #000;
        -moz-box-shadow: 0 0 4px #000;
        box-shadow: 0 0 4px #000;
        margin: 0 auto;
    }

    #mui-content img, #mui-content a {
        margin: 0 auto;
    }

    #mui-content .desc {
        height: 60px;
        margin-top: 10px;
        padding-top: 10px;
        background: rgba(0, 0, 0, 0.1);
        /*text-align: left;*/
        font-size: 14px;
    }

    #mui-content .desc span {
        color: red;
        margin-right: 10px;
        position: relative;
    }

    #mui-content .desc .right {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }

    #mui-content .desc .left {
        position: absolute;
        left: 10px;
        bottom: 10px;
    }
</style>

