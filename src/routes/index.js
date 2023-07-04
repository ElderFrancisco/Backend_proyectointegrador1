const chatAPI = require('../components/chat');
const productAPI = require('../components/product');

module.exports = (app) => {
  chatAPI(app);
  productAPI(app);
  app.get('/', (req, res, next) => {
    res.send('server on');
  });
};
