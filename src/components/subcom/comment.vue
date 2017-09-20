<template>
    <div id="tmpl">
        <!--1.0 提交评论-->
        <div id="postcomment">
            <h3>提交评论</h3>
            <p></p>
            <textarea placeholder="请评论..." v-model="postconcent"></textarea>
            <mt-button @click="postcomment" type="primary" size="large">发表评论</mt-button>
        </div>

        <!--获取评论列表-->
        <div id="list">
            <h3>评论列表</h3>
            <p></p>
            <div v-for="(item,index) in list">
                <div class="title">
                    <span>第{{index + 1}}楼</span>
                    <span>用户:{{item.userName}}</span>
                    <span>发表时间:</span>
                    <span>{{ctime | datafmt('YYYY-MM-DD HH:mm:ss')}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
        </div>

        <mt-button @click="getmore" type="danger" size="large" plain>加载更多</mt-button>

    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                list: [],
                postconcent: '',
                ctime: new Date(),
                pageindex: 1
            };
        },
        created() {
            this.getcommentlist(this.pageindex);
        },
        props: ['id'], //用来接收父组件传递过来的ID
        methods: {
            getmore() {
                this.pageindex++;
            },
            getcommentlist(pageindex) {
                pageindex = pageindex || 1;
                var url = 'http://119.23.236.253:9090/api/getcomments';
                this.$http.get(url).then(function (res) {
                    this.list = this.list.concat(res.body);
                });
            },
            postcomment() {
                if (this.postconcent.trim().length <= 0) {
                    Toast('评论内容不能为空!');
                    return;
                }
                var url = 'http://127.0.0.1:9090/api/addComment';
                this.$http.post(url, {content: this.postconcent}, {emulateJSON: true}).then(function (res) {
                    console.log(res.body);
                    Toast('评论提交ok!');
                    this.list = [{
                        'userName': 'Paki',
                        'addTime': new Date(),
                        'content': this.postconcent
                    }].concat(this.list);
                    this.postconcent = '';
                });
            }
        }
    };
</script>

<style scoped>
    /*1.0 提交评论*/
    #postcomment, #list {
        padding: 5px;
    }

    #postcomment h3, #postcomment textarea, #list h3 {
        font-size: 14px;
    }

    .mint-button {
        font-size: 14px;
    }

    #postcomment p，#list p {
        height: 1px;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }

    .title {
        color: #6d6d72;
        font-size: 15px;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 5px;
        font-size: 12px;
    }

    .mui-table-view-cell {
        font-size: 14px;
    }
</style>

