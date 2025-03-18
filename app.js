const express = require('express')
const products_routes = require('./routes/products.js')
// const slugify = require('slugify');
const {connectDB} = require('./db/mongodb-connection.js');
require('dotenv').config();

//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use('/styles', express.static('./views/styles'));

//Midleware
app.use(express.json())
app.use('/', products_routes)


const startServer = async () => {
    await connectDB(); 
    console.log("📡 Base de datos lista para consultas");
  
    app.listen(5000, () => {
      console.log('🚀 Server is listening on port 5000');
    });
  };
  
  startServer();
