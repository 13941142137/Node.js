/**
 * Created by dllo on 17/2/13.
 */
var hello = require('./hello');
// hello.sayHello('老郝');

// var hello = new hello();
// hello.setName('老郝');
// hello.sayHello();

//验证文件完整性
//模块完整路径
//不会加载模块
require.resolve('./hello');

// 模块缓存 require.cache
// console.log(require.cache);
// delete 删除模块缓存
// delete require.cache[require.resolve('./hello')];
// console.log(require.cache);

//系统模块与自写的模块有区别
//系统模块有自己系统模块的缓存
//缓存不保存在一起
var http = require('http');
console.log(require.cache);