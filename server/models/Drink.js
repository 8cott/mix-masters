const mongoose = require('mongoose');

const DrinkSchema = new mongoose.Schema({
  drink_name: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  recipe: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

module.exports = Drink = mongoose.model('drink', DrinkSchema);