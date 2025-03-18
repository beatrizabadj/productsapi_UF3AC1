const express = require('express')
const products_routes = require('./routes/products.js')
const path = require('path');

//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'views', 'styles')));

//Midleware
app.use(express.json())
app.use('/', products_routes)

//Server startup
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


