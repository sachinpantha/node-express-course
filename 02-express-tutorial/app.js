const http=require('http');
const {readFileSync}=require('fs');
const homepage = readFileSync('./index.html');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end(homepage);
    }
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1>About page</h1>');
    }
    else{
        //Sending 404 status code if not found
        res.writeHead(404,{'content-type':'text/html'});
        res.end('<h1>Page not Found sed</h1>');
    }
}).listen(5000);