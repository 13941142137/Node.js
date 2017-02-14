/**
 * Created by dllo on 17/2/13.
 */

//MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示：

//获取crypto模块
const crypto = require('crypto');
//创建creatHash，选择加密方式，mad5，sha1，sha256，sha512
const hash = crypto.createHash('md5');
//用update()方法，选择加密的内容，参数是字符串。update()方法默认字符串编码为UTF-8
hash.update('Hello, world!');
hash.update('Hello, nodejs!');
//digest('hex')，给字符串加密，hex是十六进制
// console.log(hash.digest('hex'));



// Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。不同的是，Hmac还需要一个密钥
//createmac()参数2是秘钥，是任意字符串
const hmac = crypto.createHmac('sha1', '212312313');
hmac.update('hello,world');
hmac.update('nihao!');
hmac.update('nihao!');
// console.log(hmac.digest('hex'));

// AES是一种常用的对称加密算法，加解密都用同一个密钥。crypto模块提供了AES支持，但是需要自己封装好函数，便于使用：
//写一个加密的函数，参数1是加密内容，参数2是密钥
function aesEncrypt(data, key){
    const cipher = crypto.createCipher('aes192', key);//aes192，aes-182-ecb，aes-256-cbc
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
// 写一个解密的函数，参数1是被加密的内容，参数2是密钥
function aesDecrypt(encrypted, key){
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
//作为加密函数的参数1：任意需要加密的字符串
var data = 'Hello, this is a secret message!';
// 作为加密函数的参数2：密钥 内容是任意字符串
var key = '131231241414141sdfsdfsdf';
//加密结果
var encrypted = aesEncrypt(data, key);
// 解密结果 参数1是加密结果，参数2是密钥
var decrypted = aesDecrypt(encrypted, key);

// console.log('Plain text: ' + data);
// console.log('Encrypted text: ' + encrypted);
// console.log('Decrypted text: ' + decrypted);





// Diffie-Hellman算法是一种密钥交换协议，它可以让双方在不泄漏密钥的情况下协商出一个密钥来。DH算法基于数学原理，比如小明和小红想要协商一个密钥，可以这么做：
var ming = crypto.createDiffieHellman(22);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));


var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();


var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);


console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));

