//! importing modules
const express = require('express'); 
const fs = require('fs'); 
const mongoose = require('mongoose'); 
const path = require('path'); 
const bodyParser = require('body-parser'); 
const port = 80; 
const app = express(); 

//! Static files - css and javascript files 
app.use('/static', express.static('static')); 
app.use(express.urlencoded()); 

//! Setting the pug template engine
app.set('view-engine', 'pug'); 
app.set('views', path.join(__dirname, 'views')); 

//!Endpoints 
app.get('/', (req, res)=> {
    // res.send("Hello world! this is gonna be my portfolio website"); 
    const paramsHome = {}; 
    res.status(200).render('home.pug', paramsHome); 
})



//! Server Listen
app.listen(port, ()=>{
    console.log("My Personal portfolio website is listening at port 80"); 
})



