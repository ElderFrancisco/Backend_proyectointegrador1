const productService = require('../services');

class Product {
  async getProduct(req, res, next) {
    let { id = null } = req.params;
    let response = await productService.getProduct(id);
    res.json(response);
  }

  async createProduct(req, res, next) {
    let payload = req.body;
    let response = await productService.createProduct(payload);
    res.json(response);
  }

  async updateProduct(req, res, next) {
    let { id } = req.params;
    let payload = req.body;
    let response = await productService.updateProduct(id, payload);
    res.json(response);
  }

  async deleteProduct(req, res, next) {
    let { id } = req.params;
    let response = await productService.deleteProduct(id);
    res.json(response);
  }
}

module.exports = new Product();
