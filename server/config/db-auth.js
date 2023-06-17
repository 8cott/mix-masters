const mongoose = require('mongoose');
const db = require('./keys').mongoURI;

const connectDBAuth = () => {
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => console.log('MongoDB Auth 🔌 connected'))
      .catch(err => console.log(err));
  };
  
  module.exports = connectDBAuth;
  