











var http=require('http');
var calc = require('./calc.js');
var result=calc.multiply(5,6)
console.log("The output is : "+result);

/*http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("Welcome Client");
}).listen(94);*/