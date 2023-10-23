"use strict";

const mongoose = require('mongoose');
async function connect() {
  return mongoose.connect('mongodb://127.0.0.1:27017/companydb').then(() => {
    console.log('Db is connected');
  }).catch(error => {
    console.error('Error connecting to the database:', error);
  });
}
module.exports = {
  connect
};