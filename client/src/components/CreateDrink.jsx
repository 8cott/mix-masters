import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const CreateDrink = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useContext(AuthContext);

  const [drink, setDrink] = useState({
    drink_name: '',
    ingredients: '',
    recipe: '',
    image_url: '',
    author: '',
  });

  useEffect(() => {
    if (!isLoggedIn) {
      toast.warning('🍹 You must be logged in to access this page', {
        toastId: 'login-toast',
      });
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (user) {
      setDrink((prevDrink) => ({
        ...prevDrink,
        author: user.username,
      }));
    }
  }, [user]);

  const onChange = (e) => {
    setDrink({ ...drink, [e.target.name]: e.target.value });
  };

  const handleSuccess = (msg) => {
    toast.success('🍹 Created Drink Successfully!');
  };

  const handleError = (err) => {
    toast.error('🍹 Error Creating Drink!');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!drink.image_url) {
      drink.image_url =
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
    }

    axios
      .post('http://localhost:8000/drinks', drink)
      .then((res) => {
        setDrink({
          drink_name: '',
          ingredients: '',
          recipe: '',
          image_url: '',
        });

        console.log('Successfully Created Drink');
        handleSuccess('Successfully Created Drink');

        console.log('Newly created drink ID:', res.data._id);
        navigate(`/show-drink/${res.data._id}`);
      })
      .catch((err) => {
        console.log('Error in CreateDrink!');
        handleError('Error in creating drink');
      });
  };

  return (
    <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mb: 4,
      marginTop:"5.5rem"
    }}>
    <Container>
      <Typography component="h2" align="center" variant="h5">
        Create New Drink
      </Typography>

      <form noValidate onSubmit={onSubmit}>
        <TextField
          fullWidth
          label="Name of the Drink"
          name="drink_name"
          value={drink.drink_name}
          onChange={onChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Ingredients"
          name="ingredients"
          value={drink.ingredients}
          onChange={onChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Recipe"
          name="recipe"
          value={drink.recipe}
          onChange={onChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Image URL"
          name="image_url"
          value={drink.image_url}
          onChange={onChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      <Typography variant="subtitle1" align="center" gutterBottom>
        <Link to="/">Show Drink List</Link>
      </Typography>
    </Container>
  </Box>
  );
};

export default CreateDrink;