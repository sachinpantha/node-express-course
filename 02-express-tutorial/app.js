// // const http=require('http');
// // const {readFileSync}=require('fs');
// // //LETS GRAB ALL THE NECESSARY FILES
// // const homepage = readFileSync('./navbar-app/index.html');
// // const homeStyles = readFileSync('./navbar-app/styles.css');
// // const homeImage = readFileSync('./navbar-app/logo.svg');
// // const homeLogic = readFileSync('./navbar-app/browser-app.js');

// // const server=http.createServer((req,res)=>{
// //     const url=req.url;
// //     if(url==='/'){
// //         res.writeHead(200,{'content-type':'text/html'});
// //         res.end(homepage);
// //     }
// //     else if(url==='/about'){
// //         res.writeHead(200,{'content-type':'text/html'});
// //         res.end('<h1>About page</h1>');
// //     }
// //     //TAKING STYLESHEETS
// //     else if(url==='/styles.css'){
// //         res.writeHead(200,{'content-type':'text/css'});
// //         res.end(homeStyles)
// //     }
// //     //CSS FILES MUST BE TESTED EXPLICITLY IN ORDER TO RENDER IN DOM
// //     else if(url==='/logo.svg'){
// //         res.writeHead(200,{'content-type':'image/svg+xml'});
// //         res.end(homeImage)
// //     }
// //     else if(url==='/browser-app.js'){
// //         res.writeHead(200,{'content-type':'text/javascript'});
// //         res.end(homeLogic)
// //     }
// //     else{
// //         //Sending 404 status code if not found
// //         res.writeHead(404,{'content-type':'text/html'});
// //         res.end('<h1>Page not Found sed</h1>');
// //     }
// // }).listen(5000);

// //EXPRESS INFO
// // const express= require('express');
// // const app=express()
// // app.get('/',(req,res)=>{
// //  res.status(200).send('Render home page here');
// // })
// // app.get('/about',(req,res)=>{
// //     res.status(200).send('Render About page here')
// // })
// // //RETURNING 404
// // app.all('*',(req,res)=>{
// //     res.status(404).send(`<h1>Error 404 Page not found sed</h1>`);
// // })
// // app.listen(5000,()=>{
// //     console.log('server is listenting to port 5000');
// // });

// //HANDLING NAVBAR APP VIA EXPRESS-JS
// // const express=require('express');
// // const path=require('path');
// // const app=express();
// // app.use(express.static('./public'));  //PUT ALL STATIC CSS LOGO FILE OVER HERE BY CREATING FOLDER
// // // app.get('/',(req,res)=>{
// // //     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// // // })   //HTML FILE IS ALSO A STATIC FILE
// // app.all('*',(req,res)=>{
// //     res.status(404).send('Resource not found');
// // })
// // app.listen(5000,()=>{
// //     console.log('Server is listening to port 5000');
// // })

// // const express = require("express");
// // const app = express();
// // const { products } = require("./data");
// // app.get("/", (req, res) => {
// //   res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
// // });
// // app.get("/api/products", (req, res) => {
// //   const newProducts = products.map((product) => {
// //     const { name, id, image } = product;
// //     return { name, id, image }; //THIS IS WHEN YOU FILTER OUT THE JSON
// //   });
// //   res.json(newProducts);
// // });
// // app.get("/api/products/1", (req, res) => {
// //   const singleProduct = products.find((product) => product.id == 1);
// //   res.json(singleProduct);   //FINDING A PARTICULAR PRODUCT BY ID
// // });
// // app.listen(5000, (req, res) => {
// //   console.log("Server is listening to port 5000");
// // });




const express = require("express");
const app = express();
const { products } = require("./data");
// app.get("/", (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products/:ProductID">Products</a>');
// });
// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((product) => {
//     const { name, id, image } = product;
//     return { name, id, image }; //THIS IS WHEN YOU FILTER OUT THE JSON
//   });
//   res.json(newProducts);
// });
// app.get("/api/products/:ProductID", (req, res) => {
//   console.log(req);
//   // console.log(req.params); (OPTIONAL)

//   const {ProductID}=req.params;
//   const singleProduct = products.find((product) => product.id === Number(ProductID));
//   if (!singleProduct) {
//     return res.status(404).send('The product never existed vro');
//   }
//   res.json(singleProduct);   //FINDING A PARTICULAR PRODUCT BY ID
// }); 
// // app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
// //     console.log(req.params);
// //     res.send('Hello HELlO');
// // })

// // (((((((((((Route params help to access dynamically)))))))))))
// app.get('/profile/:id',(req,res)=>{
//     console.log(req.params.id);
//     res.send('you requested '+ req.params.id);
// })
// app.get('/api/v1/query',(req,res)=>{
//     // console.log(req.query);  //QUERY IN URL
//     // res.send('Hello Query string');
//     const {search,limit}=req.query;
//     let SortedProducts=[...products]  //Spreading JSON
//     if(search){
//         SortedProducts=SortedProducts.filter((product)=>{
//             return product.name.startsWith(search); //Searching Data in API
//         })
//     }
//     if(limit){
//         SortedProducts=SortedProducts.slice(0,Number(limit));
//     }
//     if (SortedProducts.length<1) {
//         return res.status(200).send(`${search} not found`);
//       // res.status(200).send('No any products matched to your search')
//     }
//     return res.status(200).json(SortedProducts);
// })
// // ((((((((((()))))))))))



                          //MIDDLEWARE

//MIDDLEWARE IS A TIME BETWEEN WHEN SERVER GETS A REQUEST AND IT SENDS A RESPONSE

// app.get('/',(req,res)=>{
//   res.send('Home page');
//   const method=req.method;
//   const url=req.url;
//   const date= new Date().getFullYear();
//   console.log(method,url,date);
// })
// app.get('/about',(req,res)=>{
//   res.send('About page');
// })
// app.listen(5000, (req, res) => {
//   console.log("Server is listening to port 5000");
// });

// const logger=(req,res,next)=>{
//   const method=req.method;   //FOR FIRST EXAMPLE
//   const url=req.url;
//   const date= new Date().getFullYear();
//   console.log(method,url,date);
//   // res.send('Testing');
//   next()
// }
const logger=require('./logger');
const authorize=require('./authorize');
app.get('/',(req,res)=>{
  return res.send('Home page');
})
// app.use([logger,authorize]);  //THIS WILL HELP TO USE LOGGER IN EVERY ROUTES
app.get('/about',(req,res)=>{
   res.send('About page');
})
app.get('/api/products',(req,res)=>{
  return res.send('Products');
})
app.get('/api/items',(req,res)=>{
  return res.send('items');
})
app.listen(5000, (req, res) => {
  console.log("Server is listening to port 5000");
});

//WE CAN RELATE MIDDLEWARE AS A REACT COMPONENT
