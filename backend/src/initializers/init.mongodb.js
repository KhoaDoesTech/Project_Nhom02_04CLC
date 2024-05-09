const mongoose = require('mongoose');
const { db } = require('../configs/environment');

const { url } = db;

const connectString = `${url}`;

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true });
    mongoose.set('debug', { shell: true });

    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then(() => console.log('Connected Mongodb Success'.green))
      .catch((err) => console.log(`Error Connect::: ${err}`.red));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
