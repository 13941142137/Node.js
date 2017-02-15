/**
 * Created by dllo on 17/2/15.
 */
var http = require('http');
// var  fs = require('fs');
var url = require('url');
var path = require('path');
var getStaticFile = require('./getStaticFile');

var server = http.createServer();

server.on('request', function(request, response){
    if(request.url !== '/favicon.ico'){
        var urlpath = url.parse(request.url).pathname;
        var filepath = path.join(__dirname, urlpath);
        getStaticFile(filepath, response);
        // fs.stat(filepath, function(error, state){
        //     if(!error && state.isFile()){
        //         fs.createReadStream(filepath).pipe(response);
        //         response.statusCode = 200;
        //     }else{
        //         response.statusCode = 404;
        //         response.end('404 Not Found')
        //     }
        //
        // });

    }else{
        response.end();
    }

});

server.listen(8080, function(){
   console.log('服务器启动成功');
});