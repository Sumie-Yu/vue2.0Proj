<!--项目的根组件-->

<template>
    <!--template主要是放HTML元素的页面结构-->
    <div>
        <span class="red" v-text="msg"></span>
        <button @click="add(3,4)">add</button>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>

        <router-view></router-view>

        <mt-button type="default">default</mt-button>
        <mt-button plain>plain</mt-button>

        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
            </ul>
        </div>

    </div>
</template>

<script>
    /*负责导出.vue组件对象*/
    function add(x, y) {
        console.log(x + y);
    }
    export default{
        data(){
            return {
                msg: 'hello world111!'
            }
        },
        methods: {
            add
        }
    };
</script>

<style scoped>
    /*当前页面的css样式，scoped表示其内的css代码仅在当前组件内有效，不会影响其他组件页面*/
    .red {
        color: red;
    }
</style>

