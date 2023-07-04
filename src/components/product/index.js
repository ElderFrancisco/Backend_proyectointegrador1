const { Router } = require('express');
const productController = require('./controller');

module.exports = (app) => {
  const router = new Router();
  app.use('/product', router);
  router.get('/', productController.getProduct());
  router.get('/:id', productController.getProduct());
  router.post('/', productController.createProduct());
  router.put('/:id', productController.updateProduct());
  router.delete('/:id', productController.deleteProduct());
};
