/* eslint-disable no-unused-vars */
const app = require('./app');
const colors = require('colors');

const {
  app: { port },
} = require('./configs/environment');

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow.bold);
});

process.on('SIGINT', () => {
  server.close(() => console.log('Exit Server Express'));
});
