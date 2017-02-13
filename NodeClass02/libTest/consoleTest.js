/**
 * Created by dllo on 17/2/13.
 */

console.error('这里代码有问题');
var user = new Object();
user.name = '曹政';
//打印对象信息
console.dir(user);
//打印栈信息
// console.trace('这里代码有问题');
//console断言(中断后面的代码运行)
console.assert(1 > 20, '1 不大于 20');
//事件计时打印
console.time('timer');
for(var i = 0 ; i < 100000000; i++){

};
console.timeEnd('timer');
