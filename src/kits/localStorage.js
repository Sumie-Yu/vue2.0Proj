/**
 * Created by Pengzhe on 2017/9/25.
 */
/*获取数据*/
/*添加和追加数据*/
/*移除数据*/

/*1.0 定义常量*/
export const KEY = 'goodsdata';
export var valueObj = {goodsid: 0, count: 0};

/*2.0 实现数据的增加*/
export function setItem(value) {
    //1.0 获取json格式
    var jsonString =  localStorage.getItem(KEY);
    jsonString = jsonString || '[]';
    var arr =   JSON.parse(jsonString);
    // 2.0 将value追加进入arr
    arr.push(value);
    // 3.0 将arr 转换成json字符串保存起来
    localStorage.setItem(KEY,JSON.stringify(arr));
}

/*3.0 获取数据*/
export function getItem(){
    var jsonString =  localStorage.getItem(KEY);
//    将json格式字符串转换成 js对象
    // jsonString：是一个标准的json格式
    jsonString = jsonString || '[]';

    return JSON.parse(jsonString);
}

/*4.0 移除数据*/


/*5.0 将localstorage 数据整合成一个对象的格式*/
export function getgoodsObj() {
    var arr  = getItem();
// 将arr数组中的goodid相同的多个对象合并成同一个对象
    var resObj ={};
    for(var i = 0 ; i<arr.length; i++){
        var item = arr[i];
        if(!resObj[item.goodsid]){
            //    如果没有当前商品的数据，则添加一个数据
            resObj[item.goodsid] = item.count;
        }else{
            //    已经有当前商品的数据了，则将cont追加
            var count = resObj[item.goodsid];
            resObj[item.goodsid] = count + item.count;
        }
    }

    return resObj;
}
