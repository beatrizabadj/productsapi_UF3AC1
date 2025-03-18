// const sql = require("../db/mysql-connection");
const {client} = require("../db/mongodb-connection");

// constructor de Product (no ES6)
const Product = function (product) {
  this.id = product.id;
  this.name = product.name;
  this.price = product.price;
};

// métodos de producto
Product.create = async (newProduct) => {
 
  const db = client.db('products');
  const collection = db.collection('products');
  const insertResult = await collection.insertMany([newProduct]);
  return insertResult;
};

Product.listByID = async (id) =>{

  const db = client.db('products');
  const collection = db.collection('products');
  let query = {"id": parseInt(id)};
  const findResult = await collection.find(query).toArray();
  return findResult;
}

Product.listAll = async () =>{
  
  const db = client.db('products');
  const collection = db.collection('products');
  const findResult = await collection.find({}).toArray();
  return findResult;
}

Product.update = async (product) => {
  
  const db = client.db('products');
  const collection = db.collection('products');
  const selector = {"id": parseInt(product.id)};
  const set  = { "$set": {"name": product.name, "price": product.price}};
  const updateResult = await collection.updateMany(selector,set);
  return updateResult;
};

//TBD: Product.delete

module.exports = Product;

