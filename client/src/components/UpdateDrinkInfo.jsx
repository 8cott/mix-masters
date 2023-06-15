import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateDrinkInfo(props) {
  const [drink, setDrink] = useState({
    drink_name: ' ',
    ingredients: ' ',
    recipe: ' ',
    author: ' ',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/drinks/${id}`)
      .then((res) => {
        setDrink({
          drink_name: res.data.drink_name,
          ingredients: res.data.ingredients,
          recipe: res.data.recipe,
          author: res.data.author,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateDrinkInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setDrink({ ...drink, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      drink_name: drink.drink_name,
      ingredients: drink.ingredients,
      recipe: drink.recipe,
      author: drink.author,
    };

    axios
      .put(`http://localhost:8000/api/drinks/${id}`, data)
      .then((res) => {
        navigate(`/show-drink/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateDrinkInfo!');
      });
  };

  return (
    <div className="UpdateDrinkInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Drink List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Drink</h1>
            <p className="lead text-center">Update Drink's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="drink_name">Drink Name</label>
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
              <label htmlFor="ingredients">Ingredients</label>
              <input
                type="text"
                placeholder="ingredients"
                name="ingredients"
                className="form-control"
                value={drink.ingredients}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="recipe">recipe</label>
              <input
                type="text"
                placeholder="recipe"
                name="recipe"
                className="form-control"
                value={drink.recipe}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="author">author</label>
              <textarea
                type="text"
                placeholder="author of the Drink"
                name="author"
                className="form-control"
                value={drink.author}
                onChange={onChange}
              />
            </div>

            <br />

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Drink
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateDrinkInfo;
