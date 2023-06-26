import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { toast } from 'react-toastify';
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
    const confirmed = window.confirm(
      'Are you sure you want to delete this drink?'
    );
    if (confirmed) {
      axios
        .delete(`http://localhost:8000/drinks/${id}`)
        .then((res) => {
          console.log(res.data);
          navigate('/show-drink-list');
          toast('🍹 Drink Deleted!');
        })
        .catch((err) => {
          console.log('Error from handleDelete');
        });
    }
  };

  const handleEdit = () => {
    navigate(`/edit-drink/${drink._id}`);
  };

  return (
    <div className="ShowDrinkDetails">
      <div className="container">
        <div className="row">
          <div style={{ textAlign: 'left' }}>
            <Link
              to="/show-drink-list"
              style={{
                fontSize: '1.5rem',
                color: 'white',
                textShadow: '2px 2px 2px black',
              }}
            >
              <br />← Back to Drink List
            </Link>
          </div>
          <br />
          <div>
            <Card>
              <div>
                <CardMedia
                  sx={{ height: '40rem' }}
                  image={drink.image_url}
                  alt="Drinks"
                  title={drink.drink_name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {drink.drink_name}
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
                  <Typography
                    paddingBottom="1rem"
                    variant="body2"
                    color="text.secondary"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {drink.ingredients}
                  </Typography>
                  <Divider />
                  <Typography
                    paddingTop="1rem"
                    variant="body2"
                    color="text.secondary"
                    style={{ fontWeight: 'bold' }}
                  >
                    Recipe:
                  </Typography>
                  <Typography
                    paddingBottom="1rem"
                    variant="body2"
                    color="text.secondary"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {drink.recipe}
                  </Typography>
                  <Divider />
                  <Typography
                    paddingTop="1rem"
                    variant="body2"
                    color="text.secondary"
                    style={{ fontWeight: 'bold' }}
                  >
                    Author:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {drink.author}
                  </Typography>
                </CardContent>
              </div>
              <Divider />
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={handleDelete}>Delete</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDrinkDetails;
