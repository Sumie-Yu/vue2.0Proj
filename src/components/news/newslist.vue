<template>
    <div id="tmpl">
        <!-- 1.0实现新闻资讯列表样式-->
        <ul class="mui-table-view">
            <li @click="count+=1" v-for="item in list" class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.albums">
                    <div class="mui-media-body">
                        {{ item.title }}
                        <p class='mui-ellipsis'>{{ item.burden }}</p>
                        <div class="ft">
                            <span>发表时间：{{ctime | datafmt('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span class="click">点击数：{{count}}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    export default({
        data(){
            return {
                list: [],
                /* list: [
                 {
                 "uniquekey": "c3db1074244668614d9e675abae872e5",
                 "title": "球形肌是什么？这8个动作让你体验，胸部肩部爆炸起来的感觉！",
                 "date": "2017-09-14 22:20",
                 "category": "头条",
                 "author_name": "每天学点健身术",
                 "url": "http://mini.eastday.com/mobile/170914222027055.html",
                 "thumbnail_pic_s": "http://06.imgmini.eastday.com/mobile/20170914/20170914_04c2b42659344f1fc564624634e9a85a_cover_mwpm_03200403.jpg",
                 "thumbnail_pic_s02": "http://06.imgmini.eastday.com/mobile/20170914/20170914_e4a8b06d4dea86efda531ad6cf0b9453_cover_mwpm_03200403.jpg",
                 "thumbnail_pic_s03": "http://06.imgmini.eastday.com/mobile/20170914/20170914_194e92eff6c67725eea22af22b0da780_cover_mwpm_03200403.jpg"
                 },
                 {
                 "uniquekey": "176f9b5bedcc7ba9305458518255cae2",
                 "title": "受“泰利”影响浙江沿海出现8-11级大风",
                 "date": "2017-09-14 22:19",
                 "category": "头条",
                 "author_name": "新华社",
                 "url": "http://mini.eastday.com/mobile/170914221928018.html",
                 "thumbnail_pic_s": "http://09.imgmini.eastday.com/mobile/20170914/20170914221928_3b7b97db6a21a6fd206661c51f7fa138_4_mwpm_03200403.jpg",
                 "thumbnail_pic_s02": "http://09.imgmini.eastday.com/mobile/20170914/20170914221928_7f038e49970a60bb1e36e9a596d503ed_2_mwpm_03200403.jpg",
                 "thumbnail_pic_s03": "http://09.imgmini.eastday.com/mobile/20170914/20170914221928_37b3b43ad4d97cb3feba1fe09e570e7a_1_mwpm_03200403.jpg"
                 },
                 {
                 "uniquekey": "e80895bc9aa369e62d5f41e597f90527",
                 "title": "全国第2个国家科技重大专项成果转移转化试点示范落户江西",
                 "date": "2017-09-14 21:43",
                 "category": "头条",
                 "author_name": "江西日报",
                 "url": "http://mini.eastday.com/mobile/170914214341020.html",
                 "thumbnail_pic_s": "http://02.imgmini.eastday.com/mobile/20170914/20170914214341_7003701ce2cae9714b2e3774e285319d_1_mwpm_03200403.jpg"
                 },
                 {
                 "uniquekey": "df2cb56e12cddf09055f5b9428a2c05c",
                 "title": "中国启动紧急人道主义援助，向孟加拉国提供急需物资安置难民",
                 "date": "2017-09-14 21:38",
                 "category": "头条",
                 "author_name": "澎湃新闻网",
                 "url": "http://mini.eastday.com/mobile/170914213804440.html",
                 "thumbnail_pic_s": "http://01.imgmini.eastday.com/mobile/20170914/20170914213804_4326ac0fb863f15f4ebc713f34659cf7_1_mwpm_03200403.jpg"
                 },
                 {
                 "uniquekey": "3cc73122c59aeccbc3a203bb19ccc0ed",
                 "title": "人民日报政文：民进党让台湾“最美的风景”褪色",
                 "date": "2017-09-14 21:38",
                 "category": "头条",
                 "author_name": "微信公众号“人民日报政文”",
                 "url": "http://mini.eastday.com/mobile/170914213804170.html",
                 "thumbnail_pic_s": "http://01.imgmini.eastday.com/mobile/20170914/20170914213804_ff60fdb67141c6b85b8e062900d45c7a_1_mwpm_03200403.jpg"
                 }]*/
                ctime: new Date(),
                count: 0
            };
        },
        created(){
            this.getnewslist();
        },
        methods: {
            getnewslist(){
                var url = 'http://apis.juhe.cn/cook/query?key=1064affa3a04600037211734cd92d7cf&menu=%E8%A5%BF%E7%BA%A2%E6%9F%BF&rn=5&pn=0';
                this.$http.jsonp(url).then(function (response) {
                    var data = response.body;
                    if (data.resultcode != 200) {
                        Toast(data.reason);
                        return;
                    }
                    this.list = data.result.data;
                });
            }
        }
    });
</script>

<style scoped>
    .mui-table-view img {
        height: 80px;
        width: 80px;
    }

    .mui-table-view .mui-media-object {
        line-height: 80px;
        max-width: 80px;
    }

    .mui-media-body .ft {
        font-size: 12px;
        margin-top: 1.5em;
        color: #26a2ff;
    }

    .mui-media-body .ft .click {
        margin-left: 30px;
    }
</style>

