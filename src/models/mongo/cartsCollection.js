const { Schema, model } = require('mongoose');

const collectionName = 'cart';

const collectionSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  products: [
    {
      product: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;
