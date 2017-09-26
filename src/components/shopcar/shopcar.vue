<template>
    <div id="tmpl">
        <div v-for="(item,index) in datalist" class="row">
            <mt-switch v-model="value[index]" class="switch"></mt-switch>
            <img class="image" :src="item.img" alt="">
            <div class="inforight">
                <h4 v-text="item.name"></h4>
                <ul>
                    <li>￥{{item.id/100}}</li>
                    <li>商品购买数量组件</li>
                    <li><a href="#">删除</a></li>
                </ul>
            </div>
        </div>
        {{value}}



    </div>
</template>

<script>
    import {getgoodsObj} from '../../kits/localStorage.js';
    import common from '../../kits/common.js';
    export default{
        data(){
            return {
                value: [],
                datalist: [
                    {
                        "id": "38983",
                        "des": "烧 家常味 初级入门 <30分钟",
                        "name": "可乐鸡翅",
                        "img": "http://images.meishij.net/p/20100207/1555620f84f3cbc5a42aac05881d5884_150x150.jpg"
                    },
                    {
                        "id": "58971",
                        "des": "烧 五香味 初中水平 <数小时",
                        "name": "香浓软糯红烧肉",
                        "img": "http://images.meishij.net/p/20130118/6d3f0d9caed35fb1923c1b157ccf6256_150x150.jpg"
                    }
                ]
            };
        },
        crested(){
            this.id = this.$route.params.id;
            this.getdatalist();
        },
        methods: {
            /*getdatalist(){
             var obj = getgoodsObj();
             console.log('obj' + obj);
             var idstring = '';
             for (var key in obj) {
             //idstring += key + ',';
             var url = common.apidomaindetail + '&id=' + key;
             console.log('url' + url);
             this.$http.get(url).then(function (res) {
             this.datalist = res.body.showapi_res_body.details;
             });
             }
             //idstring = idstring.substring(0, idstring.length - 1);
             }*/
        },
    };
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    .row {
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        height: 102px;
        display: flex;
        padding: 5px;
    }

    .row .image {
        height: 75px;
        width: 75px;
        flex: 0 0 75px;
        margin: auto 10px;
    }

    .switch {
        flex: 0 0 52px;
    }

    .inforight {
        flex: 1;
        margin: 5px 5px;
    }

    .inforight li {
        list-style: none;
        display: inline-block;
        font-size: 12px;
    }

    .inforight li:first-child {
        color: red;
        margin-right: 10px;
        margin-top: 10px;
    }

    .inforight li:last-child {
        margin-left: 10px;
    }

    .inforight h4 {
        color: #0094ff;
        font-size: 14px;
        margin-top: 13px;
    }


</style>

