import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowDrinkDetails(props) {
  const [drink, setDrink] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/drinks/${id}`)
      .then((res) => {
        setDrink(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowDrinkDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8000/api/drinks/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowDrinkDetails_deleteClick');
      });
  };

  const DrinkItem = (
    <div>
      <table>
        <tbody>
          <tr>
            <th>1</th>
            <td>Drink Name</td>
            <td>{drink.drink_name}</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Ingredients</td>
            <td>{drink.ingredients}</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Recipe</td>
            <td>{drink.recipe}</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Author</td>
            <td>{drink.author}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="ShowDrinkDetails">
      <div className="container">
        <div className="row">
          <div>
            <br /> <br />
            <Link to="/">Show Drink List</Link>
          </div>
          <br />
          <div>
            <h1>Drink's Record</h1>
            <p>View Drink's Info</p>
            <br />
          </div>
          <div>{DrinkItem}</div>
          <div>
            <button
              type="button"
              onClick={() => {
                onDeleteClick(drink._id);
              }}
            >
              Delete Drink
            </button>
          </div>
          <div>
            <Link to={`/edit-drink/${drink._id}`}>Edit Drink</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDrinkDetails;
