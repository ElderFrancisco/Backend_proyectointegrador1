const productModel = require('../../../models/mongo/productCollection');

class Product {
  async getProduct(id) {
    try {
      console.log('getproduct hasta aca bien');
      let response = id
        ? await productModel.findById(id)
        : await productModel.find({});
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async createProduct(payload) {
    try {
      return await productModel.create(payload);
    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(id, payload) {
    try {
      return await productModel.findByIdAndUpdate(id, payload);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id) {
    try {
      return await productModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Product();
