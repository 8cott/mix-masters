import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const DrinkCard = (props) => {
  const drink = props.drink;
  const ingredients = drink.ingredients.split(',');

  return (
    <Card sx={{ width: 400 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={drink.image_url}
        title={drink._id}
      />
      <CardContent sx={{ height: 200 }}>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/show-drink/${drink._id}`}>{drink.drink_name}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h2>Ingredients</h2>
          <ul>
            {/* Render the ingredients as a list */}
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
          </ul>
          Recipe: {drink.recipe}
          Author: {drink.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DrinkCard;