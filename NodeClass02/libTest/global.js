/**
 * Created by dllo on 17/2/13.
 */
//global
// console.log(global);

//__dirname(显示当前文件所在文件夹的路径) __filename(显示到当前文件的路径)
console.log(__dirname);
console.log(__filename);

//设置延迟多少毫秒做某事
//参数1：回调函数
//参数2：延迟多少毫秒执行（1 ~ 2147483647）
//参数3以后：回调函数中所需要参数的值，依次填入
var timer = setTimeout(function(name, age){
    console.log('本人叫' + name + '，今年' + age + '岁')
}, 1000, '张三', 38);

//清楚延迟做某事
// clearTimeout(timer);

//设置间隔多久做某事
//参数1：回调函数
//参数2：间隔 单位：毫秒
//参数3以后：回调函数需要的参数
var interval = setInterval(function(){
    console.log('我疯了');
}, 1);

//清楚间隔做某事
clearInterval(interval);

//使用以下两个函数，可能会出现性能方面的问题（慎用）
//取消回调函数的回调
timer.unref();
//回复回调函数的回调
timer.ref();
