// const {MongoClient} = require("mongodb");
// const {mongoURI} = require("../config/config.js");

// const dbName = 'products';

// // create mongoDB client
// const client = new MongoClient(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true });

// module.exports = client;

const { MongoClient } = require('mongodb');
require('dotenv').config();
const mongoURI = process.env.MONGOURI || "mongodb://localhost:27017/products"; // URI segura

const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connectDB = async () => {
  try {
    // const uri = process.env.MONGOURI;
    // if (!mongoURI) {
    //   throw new Error("❌ ERROR: La variable de entorno MONGOURI no está definida.");
    // }
    await client.connect();  // Conectamos a la base de datos
    console.log('MongoDB Connected');
    return client.db();

  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);  // Salir del proceso si no se pudo conectar
  }
};

module.exports = {connectDB, client};
