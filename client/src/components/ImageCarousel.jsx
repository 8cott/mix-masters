import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ImageCarousel = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    // Fetch drink data from the server
    fetchDrinks();
  }, []);

  const fetchDrinks = async () => {
    try {
      const response = await fetch('http://localhost:8000/drinks');
      const data = await response.json();
      // Randomize the order of drinks array
      const randomizedDrinks = shuffleArray(data);
      setDrinks(randomizedDrinks);
    } catch (error) {
      console.error('Error fetching drinks:', error);
    }
  };

  // Function to shuffle array elements
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <Carousel>
      {drinks.map((drink, index) => (
        <Item key={index} drink={drink} />
      ))}
    </Carousel>
  );
};

const Item = ({ drink }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
    }}
  >
    <Card sx={{ width: 400 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={drink.image_url}
        title={drink._id}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/show-drink/${drink._id}`}>{drink.drink_name}</Link>
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default ImageCarousel;
