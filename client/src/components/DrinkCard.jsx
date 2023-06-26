import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const DrinkCard = (props) => {
  const drink = props.drink;

  return (
    <div className='drinkcard-container'>
      <Link to={`/show-drink/${drink._id}`}>
        <img
        className='drink-image'
          src={drink.image_url}
          alt='Drinks'
          height={200}
        />
      </Link>
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
