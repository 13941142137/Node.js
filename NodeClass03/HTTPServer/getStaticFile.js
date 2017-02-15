var fs = require('fs');
var getStaticFile = function(filepath, response){
 fs.stat(filepath, function(error, state){
     fs.stat(filepath, function(error, state){
         if(!error && state.isFile()){
             fs.createReadStream(filepath).pipe(response);
             response.statusCode = 200;
         }else{
             response.statusCode = 404;
             response.end('404 Not Found')
         }

     });
 });
};

module.exports = getStaticFile;