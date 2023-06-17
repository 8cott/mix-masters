const mongoose = require ("mongoose");
const Drink = require ('./Drink');
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const seedDrink = [
        //Blueberry Muffin
        {drink_name: 'BLueberry Muffin (keto)', 
        ingredients: 'clear Bacardi Rum, Trader Joes Organic Stevia, ice, Blueberry-Lemonade Polar Seltzer',
        recipe: 'Pour 2 oz clear Bacardi Rum into glass, Add heaping minispoon (~1/8 tsp) Trader Joes organic Stevia into glass, Stir until Stevia is dissolved, Fill glass with ice, top with Blueberry-Lemonade Polar Seltzer', 
        author: 'Mix Masters'},
        //Bodega Maria
        {drink_name: 'Bodega Maria',
        ingredients: 'Tequila blanco (Espolon, Hornitos, Heradura), Tamarind Picante Modelo Chelada, lime, ice',
        recipe: 'Rim glass with Tajin (optional), Fill glass with ice, Pour 1.5 oz tequila blanco into glass, squeeze 1 lime wedge into glass, top glass with Tamarind Picante Modelo Chelada, Stir ligtly',
        author: 'Mix Masters'},
        //Butterscotch
        {drink_name: 'Butterscotch (keto)', 
        ingredients: 'clear Bacardi Rum, A&W Cream Soda drink mix (sugar free), ice, Vanilla Polar Seltzer',
        recipe: 'Fill shaker with ice, Add 2 oz clear Bacardi Rum to shaker, Add 1/3 packet of A&W Cream Soda drink mix to shaker, Shake well, pour into glass with ice, top with Vanilla Polar Seltzer', 
        author: 'Mix Masters'},
        //Chocolate Muscle Milk
        {drink_name: 'Chocolate Muscle Milk (keto)',
        ingredients: 'Blender, Trader Joes unsweetened coconut beverage, unsalted creamy almond butter, unsweetened cocoa powder, clear Bacardi Rum, Trader Joes organic Stevia, ice, rainbow sprinkles (optional)',
        recipe: 'Pour 3/8 cup Trader Joes unsweetened coconut beverage into blender, Put 1 tbspn almond butter in blender, Put 1 tsp cocoa powder in blender, Blend until smooth, Fill shaker with ice, Pour blended beverage into shaker, Add 3 minispoons(~3/8 tsp) Trader Joes organic Stevia into shaker, Add 1.75 oz clear Bacardi Rum into shaker, Shake well, Fill glass with ice, Pour shaken beverage into glass, Add rainbow sprinkles for garnish (optional)',
        author: 'Mix Masters'},
        //Jolly Rager
        {drink_name: 'Jolly Rager (keto)', 
        ingredients: 'clear Bacardi Rum, Hawiian Punch Red drink mix (sugar free), lime, ice, Strawberry-Watermelon Polar Seltzer',
        recipe: 'Fill shaker with ice, Add 2 oz clear Bacardi Rum to shaker, Add 1/4 tsp Hawiian Punch Red drink mix to shaker, squeeze 1 lime wedge into shaker, Shake well, Fill glass with ice, Pour shaken beverage into glass, top with Strawberry-Watermelon Polar Seltzer', 
        author: 'Mix Masters'},
        //Keto Koolata
        {drink_name: 'Keto Koolata (keto)', 
        ingredients: 'Blender, clear Bacardi Rum, Frozen Pineapple tidbits, Trader Joes unsweetened Coconut Beverage, Trader Joes unsweetened Stevia',
        recipe: 'Add 5 frozen pienapple tidbits to blender, Add 1/4 cup of Trader Joes Unsweetened Coconut Beverage to blender, Blend until slush consistency, Fill glass with ice, Add 1.5 oz clear Bacardi Rum to glass, Add 2 minispoons (~1/4 tsp) Trader Joes organix Stevia into glass, Stir well, Pour blended beverage into glass, Stir slightly', 
        author: 'Mix Masters'},
        //Limón Koolata
        {drink_name: 'Limón Koolata (keto)', 
        ingredients: 'clear Bacardi Rum, Countrytime Lemonade drink mix (sugar free), lemon, ice, Pineapple Polar Seltzer',
        recipe: 'Fill shaker with ice, Add 2 oz clear Bacardi Rum to shaker, Add 1/4 packet of Countrytime Lemonade drink mix to shaker, Squeeze 1/2 lemon into shaker, Shake well, Fill glass with ice, Pour shaken beverage into glass, top with Pineapple Polar Seltzer', 
        author: 'Mix Masters'},
        //Margarita
        {drink_name: 'Margarita', 
        ingredients: 'Tequila blanco (Casamigos, Don Julio, Heradura, Hornitos), Gran Manier, lime, agave, ice',
        recipe: 'Fill glass with ice, Add 2 oz teqila blanco to glass, Add 1/2 shot (3/4 oz) grand manier to glass, Add 1 oz lime juice to glass, add 1/2 shot (3/4 oz) agave to glass, Stir lightly', 
        author: 'Mix Masters'},
        //Miguels Hard Limeade
        {drink_name: 'Miguels Hard Limeade',
        ingredients: 'clear Bacardi Rum, Trader Joes organic Stevia, Lime, ice, unflavored seltzer',
        recipe: 'Fill glass with ice, Add 2 oz clear Bacardi Rum to glass, Squeeze 1/2 Lime into glass, Add 1 minispoon (~1/8 tsp) Trader Joes unsweetened Stevia to glass, Stir well, Top wit unflavored seltzer',
        author: 'Mix Masters'},
        //Milk of the Poppy
        {drink_name: 'Milk of the Poppy',
        ingredients: 'clear Bacardi Rum, Trader Joes unsweetened Coconut Beverage, Trader Joes organic Stevia, ice, Toasted Coconut Polar Seltzer',
        recipe: 'Fill shaker with ice, Add 2 oz clear Bacardi Rum to shaker, Add 4 oz Trader Joes unsweetened coconut beverage to shaker, Add 1 minispoon (~1/8 tsp) Trader Joes organic Stevia to shaker, Shake well, Fill glass with ice, Pour shaken beverage into glass, top with Toasted Coconut Polar seltzer',
        author: 'Mix Masters'},
]

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    Drink.insertMany(seedDrink).then(function(){
      console.log("Data inserted")  // Success
    }).catch(function(error){
      console.log(error)      // Failure
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });