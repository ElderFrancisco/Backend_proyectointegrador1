const { Schema, model } = require('mongoose');

const collectionName = 'products';

const collectionSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  stock: Number,
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;
