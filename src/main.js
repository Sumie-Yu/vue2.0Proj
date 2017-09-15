//编写解析.vue 的代码

// 1.0 导入vue 核心包
import Vue from 'vue';

// 2.0 导入App.vue的文件
import App from './App.vue';

// 3.0 将vue-router 集成到对象中
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上；
Vue.use(vueRouter);
// 3.0.2 导入路由规则对应的组件对象
import home from './components/home.vue';
import shopcar from './components/shopcar/shopcar.vue';
import newslist from './components/news/newslist.vue';
// 3.0.3 定义路由规则
var router = new vueRouter({
    linkActiveClass: 'mui-active', //改变路由激活时的class名称
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/shopcar', component: shopcar},
        {path: '/news/newslist', component: newslist}
    ]
});

// 4.0 注册mint-ui
// 导入mintui css 及使用对象
import 'mint-ui/lib/style.css'
import mintui from 'mint-ui';
// 4.0.1 使用mint-ui
Vue.use(mintui);

// 5.0 注册 mui的css样式
import '../statics/mui/css/mui.css';

// 6.0 当前系统的全局基本样式
import '../statics/css/site.css';

// 7.0 将vue-resource 在vue中绑定，自动在vue对象实例上注册一个$http对象就可以使用。
import vueResource from 'vue-resource';
Vue.use(vueResource);

// 8.0 定义全局过滤器
import moment from 'moment'; // 导入momentjs 来格式化时间
Vue.filter('datafmt', function (input, fmtstring) {
    return moment(input).format(fmtstring);
});

// 9.0 将App中的内容编译解析出来替换index.html中的<div id="app"></div>
new Vue({
    el: '#app',
    router, //实际写法为router:router
    render: c => c(App)  //[2,1,3].sort((x,y)=> {x++;y++; y - x;});
});