import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import '../App.css';

const DrinkCard = (props) => {
  const drink = props.drink;

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '.08rem',
      }}
    >
      <div>
        <Link to={`/show-drink/${drink._id}`}>
          <CardMedia
            sx={{ height: 140 }}
            image={drink.image_url}
            alt="Drinks"
            title={drink.drink_name}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/show-drink/${drink._id}`}>{drink.drink_name}</Link>
          </Typography>
          <Divider />
          <Typography
          paddingTop="1rem"
            variant="body2"
            color="text.secondary"
            style={{ fontWeight: 'bold' }}
          >
            Ingredients:
          </Typography>
          <div
            style={{
              maxHeight: '100px',
              overflowY: 'auto',
              paddingRight: '10px',
            }}
          >
            <Typography
            paddingBottom="1rem"
              variant="body2"
              color="text.secondary"
              style={{ whiteSpace: 'pre-line' }}
            >
              {drink.ingredients}
            </Typography>
          </div>
          <Divider />
          <Typography
          paddingTop="1rem"
            variant="body2"
            color="text.secondary"
            style={{ fontWeight: 'bold' }}
          >
            Recipe:
          </Typography>
          <div
            style={{
              maxHeight: '100px',
              overflowY: 'auto',
              paddingRight: '10px',
              paddingBottom: "1rem"
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ whiteSpace: 'pre-line' }}
            >
              {drink.recipe}
            </Typography>
          </div>
          <Divider />
        </CardContent>
      </div>
      <CardActions sx={{ justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ fontWeight: 'bold' }}
          >
            Author:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {drink.author}
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default DrinkCard;
