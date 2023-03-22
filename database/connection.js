const mongoose = require('mongoose');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/?authMechanism=DEFAULT`

const connection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("You are connected in the database")
  } catch (e) {
    console.log(e);
    throw new Error("Connection unsuccessful");
  }
}

module.exports = {
  connection
}