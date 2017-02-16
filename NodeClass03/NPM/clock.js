/**
 * Created by dllo on 17/2/15.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');



http.createServer(function(req, res){
    if(req.url !== '/favicon.ico'){
        var urlpath = url.parse(req.url).pathname;
        var filepath = path.join(__dirname, urlpath);
        fs.stat(filepath, function(error, state){
            if(!error && state.isFile()){
                fs.createReadStream(filepath).pipe(res);
                res.statusCode = 200;
            }else{
                if(error.code == 'ENOENT'){
                    res.statusCode = 200;
                    res.end('404 Not Found');
                }else{
                    res.statusCode = 200;
                    res.end('500 Server have error')
                }
            }
        });
    }
}).listen(2000);