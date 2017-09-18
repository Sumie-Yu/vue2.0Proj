<template>
    <div id="tmpl">
        <!--图片分类-->
        <div id="cate">
            <ul v-bind="{style:'width:'+ ulWidth + 'px'}">
                <li @click="getimages(0)">全部</li>
                <li v-for="item in cates"
                    @click="getimages(item.id)">
                    {{item.name}}
                </li>
            </ul>
        </div>

        <!--图片列表-->
        <div id="imglist">
            <ul>
                <li v-for="imgitem in list">
                    <router-link v-bind="{to:'/photo/photoinfo/'+ imgitem.id}">
                        <div id="desc">
                            <h5 v-text="imgitem.name"></h5>
                            <p v-text="imgitem.des"></p>
                        </div>
                        <img v-lazy="imgitem.img">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    import {Lazyload} from 'mint-ui';
    import {Toast} from 'mint-ui';
    export default{
        data(){
            return {
                cates: [],
                ulWidth: 375,
                list: [],
            };
        },
        created(){
            this.getcates();
            var all = 0;
            this.getimages(all);
        },
        methods: {
            getcates(){
                var url = common.apidomain;
                this.$http.get(url).then(function (res) {
                    this.cates = res.body.showapi_res_body.list;
                    var w = 94;
                    var count = this.cates.length + 1;
                    this.ulWidth = w * count;
                    /*var str = JSON.stringify(this.cates);
                     console.log('cates' + str)*/
                });
            },
            getimages(cateid){
                cateid = cateid || 0;
                var url = common.apidomain;
                this.$http.get(url).then(function (res) {
                    this.list = res.body.showapi_res_body.list;
                });
            }
        },
    }
</script>

<style scoped>
    #cate, #imglist, #desc, div, ul, li, span, h5, img {
        margin: 0;
        padding: 0;
    }

    #cate {
        max-width: 375px;
        overflow: auto;
        width: 375px;
        margin: 0 auto;
    }

    #cate ul {
        margin: 0;
        padding-left: 10px;
        width: 1000px;
    }

    #cate ul li {
        list-style: none;
        display: inline-block;
        color: #0094ff;
        font-size: 14px;
        padding-left: 10px;
        height: 50px;
        line-height: 40px;
        cursor: pointer;
    }

    #imglist ul {
        padding-left: 0;

    }

    #imglist li {
        list-style: none;
        position: relative;
    }

    #imglist img {
        width: 100%;
        height: 300px;
    }

    #desc {
        width: 100%;
        background: rgba(0, 0, 0, 0.2);
        position: absolute;
        bottom: 1px;
        padding: 5px;
    }

    #desc h5 {
        color: #fff;
        font-weight: bold;
        margin-bottom: 3px;
    }

    #desc p {
        color: #fff;
        margin-bottom: 0px;
    }

    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>

