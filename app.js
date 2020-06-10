const http = require('http');

const fs = require('fs');
const hostname = "10.9.31.74"
const port = 91
const server = http.createServer((req,res)=>{
    if(req.method == 'GET' && req.url == '/'){
        res.writeHead(200,'Conten-Type' , 'text/html');
        fs.createReadStream('./public/index.html').pipe(res);
    }
})
server.listen(port,hostname,()=>{
    console.log("Server started at port : "+port)
})