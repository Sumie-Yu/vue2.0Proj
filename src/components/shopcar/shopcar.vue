<template>
    <div id="tmpl">
        <div v-bind="datalist" v-for="(item,index) in datalist" class="row">
            <mt-switch v-model="value[index]" class="switch"></mt-switch>
            <img class="image" :src="datalist.img" alt="">
            <div class="inforight">
                <h4 v-text="datalist.name"></h4>
                <ul>
                    <li>￥{{price}}</li>
                    <li>商品购买数量组件</li>
                    <li><a href="#">删除</a></li>
                </ul>
            </div>
        </div>
        {{value}}

    </div>
</template>

<script>
    import {getgoodsObj, KEY, valueObj} from '../../kits/localStorage';
    import common from '../../kits/common.js';
    export default{
        data(){
            return {
                value: [],
               datalist: [
                    /*/!* {
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
                     }*!/*/
                ],
                list: {},
                price: 0
            };
        },
        created(){
            this.getdatalist();
            //var price = parseInt(this.datalist.id) / 100;
        },
        methods: {
            getdatalist(){
                var obj = getgoodsObj();
                var datalist = [];
                for (var key in obj) {
                    var url = common.apidomaindetail + '&id=' + key;
                    this.$http.get(url).then(function (res) {
                        this.list = res.body.showapi_res_body.details;
                        this.price = (parseInt(this.list.view) / 100000).toFixed(2);
                        console.log('JSON '+JSON.stringify(this.list));
                        datalist.push(this.list);
                        datalist = JSON.stringify(datalist);
                    });
                }
                console.log('datalist11111 '+JSON.stringify(datalist));
            }
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

