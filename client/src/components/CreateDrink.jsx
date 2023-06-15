import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateDrink = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [drink, setDrink] = useState({
    drink_name: '',
    ingredients: '',
    recipe: '',
    author: '',
  });

  const onChange = (e) => {
    setDrink({ ...drink, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/api/drinks', drink)
      .then((res) => {
        setDrink({
          drink_name: '',
          ingredients: '',
          recipe: '',
          author: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateDrink!');
      });
  };

  return (
    <div className="CreateDrink">
      <div className="container">
        <div className="row">
          <div>
            <br />
            <Link to="/">Show Drink List</Link>
          </div>
          <div>
            <h1>Add Drink</h1>
            <p className="lead text-center">Create new drink</p>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name of the Drink"
                  name="drink_name"
                  className="form-control"
                  value={drink.drink_name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Ingredients"
                  name="ingredients"
                  className="form-control"
                  value={drink.ingredients}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Recipe"
                  name="recipe"
                  className="form-control"
                  value={drink.recipe}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={drink.author}
                  onChange={onChange}
                />
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDrink;
