const Cart = require('../models/cart');

class CartController {
  static id = 0;

  constructor() {
    this.CartModel = Cart;
    this.initializeId();
  }

  async initializeId() {
    try {
      const latestCart = await this.CartModel.findOne().sort({ id: -1 }).exec();
      CartController.id = latestCart ? latestCart.id : 0;
    } catch (error) {
      console.error('Error al inicializar el ID del carrito:', error);
    }
  }

  async getAllCarts(req, res) {
    try {
      const carts = await this.CartModel.find().exec();
      res.send(carts);
    } catch (error) {
      res.status(500).send('Error al obtener los carritos.');
    }
  }

  async createNewCart(req, res) {
    try {
      const newProduct = req.body;
      const newCart = new this.CartModel({
        id: ++CartController.id,
        products: [newProduct],
      });

      await newCart.save();
      res.send(newCart);
    } catch (error) {
      res.status(500).send('Error al crear un nuevo carrito.');
    }
  }

  async getCartById(req, res) {
    try {
      const cartId = parseInt(req.params.cid);
      const cart = await this.CartModel.findOne({ id: cartId }).exec();
      if (cart) {
        res.send(cart);
      } else {
        res
          .status(404)
          .send(`No se encontró ningún carrito con el ID proporcionado.`);
      }
    } catch (error) {
      res.status(500).send('Error al obtener el carrito por ID.');
    }
  }

  async updateCartWithProduct(req, res) {
    try {
      const cartId = parseInt(req.params.cid);
      const productId = req.params.pid;

      const selectedCart = await this.CartModel.findOne({ id: cartId }).exec();
      if (!selectedCart) {
        return res
          .status(404)
          .send(`No se encontró ningún carrito con el ID proporcionado.`);
      }

      const selectedProduct = selectedCart.products.find(
        (cart) => cart.product === productId,
      );

      if (selectedProduct) {
        selectedProduct.quantity += 1;
      } else {
        selectedCart.products.push({ product: productId, quantity: 1 });
      }

      await selectedCart.save();
      res.send(selectedCart);
    } catch (error) {
      res.status(500).send('Error al actualizar el carrito con el producto.');
    }
  }
}

module.exports = CartController;
