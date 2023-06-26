import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthContext';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const UpdateDrinkInfo = (props) => {
  const [drink, setDrink] = useState({
    drink_name: '',
    ingredients: '',
    recipe: '',
    image_url: '',
    author: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/drinks/${id}`)
      .then((res) => {
        setDrink({
          drink_name: res.data.drink_name,
          ingredients: res.data.ingredients,
          recipe: res.data.recipe,
          image_url: res.data.image_url,
          author: res.data.author,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateDrinkInfo');
      });
  }, [id]);

  useEffect(() => {
    if (!isLoggedIn) {
      toast.warning('🍹 You must be logged in to access this page', {
        toastId: 'login-toast',
      });
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const onChange = (e) => {
    setDrink({ ...drink, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      drink_name: drink.drink_name,
      ingredients: drink.ingredients,
      recipe: drink.recipe,
      image_url: drink.image_url,
      author: drink.author,
    };

    axios
      .put(`http://localhost:8000/drinks/${id}`, data)
      .then((res) => {
        toast.success(' 🍹 Drink updated successfully');
        navigate(`/show-drink/${id}`);
      })
      .catch((err) => {
        toast.error(' 🍹Error updating drink');
        console.log('Error in UpdateDrinkInfo!');
      });
  };

  const FormContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  }));

  const FormTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
  }));

  const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  });

  const FormField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
  }));

  const SubmitButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
  }));

  return (
    <FormContainer>
      <FormTitle variant="h3" align="center">
        Edit Drink
      </FormTitle>

      <Form noValidate onSubmit={onSubmit}>
        <FormField
          fullWidth
          label="Drink Name"
          placeholder="Name of the Drink"
          name="drink_name"
          value={drink.drink_name}
          onChange={onChange}
          required
        />

        <FormField
          fullWidth
          label="Ingredients"
          placeholder="Ingredients"
          name="ingredients"
          value={drink.ingredients}
          onChange={onChange}
          required
        />

        <FormField
          fullWidth
          label="Recipe"
          placeholder="Recipe"
          name="recipe"
          value={drink.recipe}
          onChange={onChange}
          required
        />

        <FormField
          fullWidth
          label="Image URL"
          placeholder="Image URL"
          name="image_url"
          value={drink.image_url}
          onChange={onChange}
        />

        <FormField
          fullWidth
          label="Author"
          placeholder="Author of the Drink"
          name="author"
          multiline
          value={drink.author}
          onChange={onChange}
        />

        <SubmitButton type="submit" variant="contained" color="primary">
          Update Drink
        </SubmitButton>
      </Form>

      <Typography variant="subtitle1" align="center" gutterBottom>
        <Link to="/">Show Drink List</Link>
      </Typography>
    </FormContainer>
  );
};

export default UpdateDrinkInfo;