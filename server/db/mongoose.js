const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Steals promises from node

//If there is an environment variable MONGOD_URI connect ot the OR connect to localhost
mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost:27017/ex_db');

module.exports = {
  mongoose
};
