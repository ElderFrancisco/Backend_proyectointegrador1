const express = require('express');
const cors = require('cors');
const serverRoutes = require('./routes');
const path = require('path');
const http = require('http');
const { config } = require('./config');
const Socket = require('./utils/sockets/socket.io');

class Server {
  constructor(port) {
    this.PORT = port;
    this.app = express();
    this.server = http.createServer(this.app);
    this.socket = new Socket(this.server);
    this.settings();
    this.views();
    this.middlewares();
    this.routes();
    this.port = process.env.PORT || 3000;
  }

  settings() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static('${__dirname}/public'));
  }
  views() {
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
  }
  middlewares() {
    this.app.use(cors('*'));
  }
  routes() {
    this.app.use((req, res, next) => {
      req.socketManager = this.socket;
      next();
    });
    serverRoutes(this.app);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = new Server();
