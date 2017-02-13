/**
 * Created by dllo on 17/2/10.
 */
//获取文件系统模块
var fileSytem = require('fs');
//文件系统模块读入文件
//参数1 要读入的文件路径
//参数2 选项，文本的编码格式
//参数3 回调函数

// //异步执行，非阻塞
// console.log('读文件前');
// fileSytem.readFile('./1.txt', 'utf-8', function (err, data) {
//     console.log(data);
//     console.log('读文件中');
// });
// console.log('读文件后');


// //同步执行，阻塞
// console.log('读文件前');
// var data = fileSytem.readFileSync('./1.txt', 'utf-8');
// console.log(data);
// console.log('读文件后');





var string = '123456789';
fileSytem.writeFile('./1.txt', string, 'utf-8', function(err){
   console.log('写入成功');
});

var say = require('./SayHello');
say.sayHello(say.name);
