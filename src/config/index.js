require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
};

const mongo = {
  mongo_local: process.env.MONGO_LOCAL,
};

module.exports = { config, mongo };
