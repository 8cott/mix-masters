const mongoose = require('mongoose');

const DrinkSchema = new mongoose.Schema({
  drink_name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
});

module.exports = Drink = mongoose.model('drink', DrinkSchema);
