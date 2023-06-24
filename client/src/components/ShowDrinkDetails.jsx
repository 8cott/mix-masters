import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function ShowDrinkDetails(props) {
  const [drink, setDrink] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/drinks/${id}`)
      .then((res) => {
        setDrink(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowDrinkDetails');
      });
  }, [id]);

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this drink?');
    if (confirmed) {
      axios
        .delete(`http://localhost:8000/drinks/${id}`)
        .then((res) => {
          console.log(res.data);
          navigate('/show-drink-list');
        })
        .catch((err) => {
          console.log('Error from handleDelete');
        });
    }
  };

  const handleEdit = () => {
    navigate(`/edit-drink/${drink._id}`);
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
            <Link to="/show-drink-list">Show Drink List</Link>
          </div>
          <br />
          <div>
            <h1>Drink's Record</h1>
            <p>View Drink's Info</p>
            <br />
          </div>
          <div>{DrinkItem}</div>
          <div>
            <button type="button" onClick={handleDelete}>
              Delete Drink
            </button>
          </div>
          <div>
            <button type="button" onClick={handleEdit}>
              Edit Drink
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDrinkDetails;
