const express = require('express')
const products_routes = require('./routes/products.js')
const slugify = require('slugify');

//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

//Midleware
app.use(express.json())
app.use('/', products_routes)

const welcomeMessage = slugify("Welcome to Products API", { replacement: '*', lower: true });
app.get('/', (req, res) => {
    res.send(welcomeMessage);
});

//Server startup
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


