import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DrinkCard from './DrinkCard';
import { Typography } from '@mui/material';
import '../App.css';

function ShowDrinkList() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/drinks')
      .then((res) => {
        setDrinks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowDrinkList');
      });
  }, []);

  const drinkList =
    drinks.length === 0
      ? 'there is no drink record!'
      : drinks.map((drink, k) => <DrinkCard drink={drink} key={k} />);

  return (
    <div className="ShowDrinkList">
      <div className="container">
        <div className="row">
          <div>
            <br />
            <Typography style={{ fontSize: '1.5rem', color: 'white', textShadow: '2px 2px 2px black' }}>Drinks</Typography>
            <br />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {drinkList}
        </div>
      </div>
    </div>
  );
}

export default ShowDrinkList;
