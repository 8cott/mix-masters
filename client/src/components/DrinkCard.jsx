import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const DrinkCard = (props) => {
  const drink = props.drink;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={drink.image_url}
        title={drink._id}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/show-drink/${drink._id}`}>{drink.drink_name}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ingredients: {drink.ingredients}
          Recipe: {drink.recipe}
          Author: {drink.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DrinkCard;
