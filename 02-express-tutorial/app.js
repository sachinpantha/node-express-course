// const http=require('http');
// const {readFileSync}=require('fs');
// //LETS GRAB ALL THE NECESSARY FILES
// const homepage = readFileSync('./navbar-app/index.html');
// const homeStyles = readFileSync('./navbar-app/styles.css');
// const homeImage = readFileSync('./navbar-app/logo.svg');
// const homeLogic = readFileSync('./navbar-app/browser-app.js');

// const server=http.createServer((req,res)=>{
//     const url=req.url;
//     if(url==='/'){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.end(homepage);
//     }
//     else if(url==='/about'){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.end('<h1>About page</h1>');
//     }
//     //TAKING STYLESHEETS
//     else if(url==='/styles.css'){
//         res.writeHead(200,{'content-type':'text/css'});
//         res.end(homeStyles)
//     }
//     //CSS FILES MUST BE TESTED EXPLICITLY IN ORDER TO RENDER IN DOM
//     else if(url==='/logo.svg'){
//         res.writeHead(200,{'content-type':'image/svg+xml'});
//         res.end(homeImage)
//     }
//     else if(url==='/browser-app.js'){
//         res.writeHead(200,{'content-type':'text/javascript'});
//         res.end(homeLogic)
//     }
//     else{
//         //Sending 404 status code if not found
//         res.writeHead(404,{'content-type':'text/html'});
//         res.end('<h1>Page not Found sed</h1>');
//     }
// }).listen(5000);


//EXPRESS INFO
const express= require('express');
const app=express()
app.get('/',(req,res)=>{
 res.send('Render home page here');
})
app.get('/about',(req,res)=>{
    res.send('Render About page here')
})
app.get('/about',(req,res)=>{
    res.send('Render About page here')
})
app.listen(5000,()=>{
    console.log('server is listenting to port 5000');
});