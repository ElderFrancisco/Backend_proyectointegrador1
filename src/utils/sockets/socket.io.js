const socketIO = require('socket.io');

class Socket {
  static insstancia = undefined;
  constructor(http) {
    if (Socket.insstancia) {
      return Socket.insstancia;
    }
    this.io = socketIO(http);
  }
  init() {
    try {
    } catch (error) {
      console.log('error en el init' + error);
    }
  }
}
