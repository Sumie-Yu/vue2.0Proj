/**
 * Created by Pengzhe on 2017/9/15.
 */
// 管理当前系统中的所有公共的配置
var ctime = new Date();
var year = ctime.getFullYear();
var month = (ctime.getMonth() + 1) > 10 ? (ctime.getMonth() + 1) : '0' + (ctime.getMonth() + 1);
var date = ctime.getDate() > 10 ? ctime.getDate() : '0' + ctime.getDate();
var hour = ctime.getHours() > 10 ? ctime.getHours() : '0' + ctime.getHours();
var minute = ctime.getMinutes() > 10 ? ctime.getMinutes() : '0' + ctime.getMinutes();
var second = ctime.getSeconds() > 10 ? ctime.getSeconds() : '0' + ctime.getSeconds();
var time = year + '' + month + '' + date + '' + hour + '' + minute + '' + second;

export default {
    /* getCurrenttime: function () {
     var ctime = new Date();
     var year = ctime.getFullYear();
     var month = (ctime.getMonth() + 1) > 10 ? (ctime.getMonth() + 1) : '0' + (ctime.getMonth() + 1);
     var date = ctime.getDate() > 10 ? ctime.getDate() : '0' + ctime.getDate();
     var hour = ctime.getHours() > 10 ? ctime.getHours() : '0' + ctime.getHours();
     var minute = ctime.getMinutes() > 10 ? ctime.getMinutes() : '0' + ctime.getMinutes();
     var second = ctime.getSeconds() > 10 ? ctime.getSeconds() : '0' + ctime.getSeconds();
     var time = year + '' + month + '' + date + '' + hour + '' + minute + '' + second;
     return time;
     console.log(time);
     },*/
    apidomain: 'https://route.showapi.com/1461-2?page=1&q=%E4%B8%8B%E9%A5%AD%E8%8F%9C&showapi_appid=46374&showapi_test_draft=false&showapi_timestamp=' + time + '&showapi_sign=d34b1ba97db6410f9bea4519e91890bc',/*
    apidomaindetail: 'https://route.showapi.com/1461-3?showapi_appid=46374&showapi_test_draft=false&showapi_timestamp=' + time + '&showapi_sign=d34b1ba97db6410f9bea4519e91890bc&id=58973',*/
    apidomaindetail: 'https://route.showapi.com/1461-3?showapi_appid=46374&showapi_test_draft=false&showapi_timestamp=' + time + '&showapi_sign=d34b1ba97db6410f9bea4519e91890bc'
};