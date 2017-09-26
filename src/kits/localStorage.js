/**
 * Created by Pengzhe on 2017/9/25.
 */
/*获取数据*/
/*添加和追加数据*/
/*移除数据*/

/*1.0 定义常量*/
export const KEY = 'goodsdataz';
export var valueObj = {goodsid: 0, count: 0};

/*2.0 实现数据的增加*/
export function setItem(value) {
    var jsonString = localStorage.getItem(KEY);
    jsonString = jsonString || '[]';
    var arr = JSON.parse(jsonString);
    arr.push(value);
    localStorage.setItem(KEY, JSON.stringify(arr));
}

/*3.0 获取数据*/
export function getItem() {
    var jsonString = localStorage.getItem(KEY);
    jsonString = jsonString || '[]';
    return JSON.parse(jsonString);
}

/*4.0 移除数据*/


/*5.0 将localstorage 数据整合成一个对象的格式*/
export function getgoodsObj() {
    var arr = getItem();
    var resObj = {};
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (!resObj[item.goodsid]) {
            resObj[item.goodsid] = item.count;
        } else {
            var count = resObj[item.goodsid];
            resObj[item.goodsid] = count + item.count;
        }
    }
    return resObj;
    console.log('resObj' + resObj);
}
