import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const DrinkCard = (props) => {
  const drink = props.drink;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
        alt='Drinks'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-drink/${drink._id}`}>{drink.drink_name}</Link>
        </h2>
        <h3>{drink.ingredients}</h3>
        <p>{drink.recipe}</p>
        <p>{drink.author}</p>
      </div>
    </div>
  );
};

export default DrinkCard;