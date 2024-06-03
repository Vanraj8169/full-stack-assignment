// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  imageSrc: String,
  imageAlt: String,
  price: String,
  color: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
