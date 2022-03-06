const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('Server is started!');
}).listen(5000);