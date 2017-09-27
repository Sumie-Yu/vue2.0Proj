<!--项目的根组件-->

<template>
    <!--template主要是放HTML元素的页面结构-->
    <div>

        <!--1.0 使用mint-ui中的header组件实现整个系统的头部-->
        <mt-header fixed title="Sumie.Project"></mt-header>

        <!--返回按钮-->
        <div id="back" v-if="isshow">
            <a href="javascript:void(0)" @click="backto">返回</a>
        </div>

        <!--2.0 使用vue-router中的 router-view 进行占位-->
        <router-view></router-view>

        <!--3.0 使用mui中的header组件实现整个系统的底部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-chat">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar/shopcar">
                <span class="mui-icon mui-icon-contact">
                    <span class="mui-badge" id="badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    /*负责导出.vue组件对象*/
    import {vm, COUNTSTR} from './kits/vm.js';
    vm.$on(COUNTSTR, function (count) {
        console.log('ASDF' + count);
        var badgeobj = document.getElementById('badge');
        badgeobj.innerText = parseInt(badgeobj.innerText) + count;
    });

    export default{
        data(){
            return {
                isshow: false
            };
        },
        watch: {
            '$route': function (newroute, oldroute) {
                if (newroute.path.toLowerCase() == '/home') {
                    this.isshow = false;
                } else {
                    this.isshow = true;
                }
                //console.log(newroute);
            }
        },
        methods: {
            backto(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    /*当前页面的css样式，scoped表示其内的css代码仅在当前组件内有效，不会影响其他组件页面*/
    #back {
        position: relative;
        z-index: 1000;
    }

    #back a {
        color: white;
        font-size: 16px;
        position: absolute;
        top: -35px;
        left: 20px;

    }
</style>

