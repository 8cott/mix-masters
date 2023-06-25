import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthContext';

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
      drink.image_url = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
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
                  placeholder="Image_URL"
                  name="image_url"
                  className="form-control"
                  value={drink.image_url}
                  onChange={onChange}
                />
              </div>

              {/* <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={drink.author}
                  onChange={onChange}
                />
              </div> */}
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDrink;
