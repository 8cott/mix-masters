import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:8000/login',
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, token } = data;
      if (success) {
        localStorage.setItem('jwt', token);
        setIsLoggedIn(true);
        handleSuccess(message);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: '',
      password: '',
    });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to={'/signup'}>Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
