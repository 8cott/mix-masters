import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import DrinkCard from './DrinkCard';

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
      setDrinks(data);
    } catch (error) {
      console.error('Error fetching drinks:', error);
    }
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
    <DrinkCard drink={drink} />
  </div>
);

export default ImageCarousel;
