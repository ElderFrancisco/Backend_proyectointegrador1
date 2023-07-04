const productService = require('../services');

class Product {
  async get(req, res, next) {
    let { id = null } = req.params;
    let response = await productService.getProduct(id);
    res.json(response);
  }

  async create(req, res, next) {
    let payload = req.body;
    let response = await productService.createProduct(payload);
    res.json(response);
  }

  async update(req, res, next) {
    let { id } = req.params;
    let payload = req.body;
    let response = await productService.updateProduct(id, payload);
    res.json(response);
  }

  async delete(req, res, next) {
    let { id } = req.params;
    let response = await productService.deleteProduct(id);
    res.json(response);
  }
}

module.exports = new Product();
