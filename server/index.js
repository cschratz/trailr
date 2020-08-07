//import router from api file
const {router} = require('./api/routes');

//import express framework 
const express = require('express');

//import body parser for response information
const bodyParser = require('body-parser');

// //set local variable to  a new instance of express router 
// const router = require('./api/routes');

// create new instance of express frame work saved to local variable
const app = express();

//utilize body parser on incoming requests to server 
app.use(bodyParser.json())


//configure the PORT server will listen for calls on
const PORT = 8080;

 //set server to listen for requests on configured report
 app.listen(PORT, ()=> {
   console.log(`Server Walking The Trails on http://localhost:${PORT}`)
 });


//direct express to certain middleware for requests on certain paths
app.use('/', router);



