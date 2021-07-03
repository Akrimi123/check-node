var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Bonsoir Akrimi Rabeh !!!');
    res.end();
}).listen(4041);
console.log('server http://127.0.0.1:4041/');