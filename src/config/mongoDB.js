const mongoose = require('mongoose');
const { mongo } = require('./');

let connection;
(async () => {
  try {
    connection = await mongoose.connect(mongo.mongo_local, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
})();
