const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  name: String,
  stock: Number
});

const variationSchema = new mongoose.Schema({
  color: String,
  image: String,
  size: [sizeSchema]
});

const productSchema = new mongoose.Schema({
  sku: String,
  name: String,
  price: Number,
  discount: Number,
  offerEnd: Date,
  new: Boolean,
  rating: Number,
  saleCount: Number,
  category: [String],
  tag: [String],
  variation: [variationSchema],
  image: [String],
  shortDescription: String,
  fullDescription: String
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
