import React, { useState, useEffect } from 'react'; // Added useEffect
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import '../../../../client/src/login.css';

const Login_Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Added isLoggedIn state

  useEffect(() => {
    console.log('isLoggedIn changed:', isLoggedIn); // Log when isLoggedIn changes
  }, [isLoggedIn]);

  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const onSubmit = (e, formName) => {
    e.preventDefault();

    if (formName === 'login') {
      const userData = {
        email: state.email,
        password: state.password,
      };

      fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.token) {
            localStorage.setItem('jwtToken', data.token);
            setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
          }
        })
        .catch((error) => console.error('Error:', error));
    } else if (formName === 'signup') {
      const newUser = {
        name: state.name,
        email: state.email,
        password: state.password,
        password2: state.password2,
      };

      fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            setIsLoggedIn(true); // Set isLoggedIn to true upon successful registration
          }
        })
        .catch((error) => console.error('Error:', error));
    }
  };

  const { errors } = state;

  return (
    <div>
      <NavBar />
      <div className="login-card">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="login">
            <form noValidate onSubmit={(e) => onSubmit(e, 'login')} name="login">
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <input
                onChange={onChange}
                value={state.email}
                error={errors.email}
                id="email"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={onChange}
                value={state.password}
                error={errors.password}
                id="password"
                type="password"
                placeholder="Password"
              />
              <button type="submit">Login</button>
            </form>
          </div>

          <div className="signup">
            <form noValidate onSubmit={(e) => onSubmit(e, 'signup')} name="signup">
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                onChange={onChange}
                value={state.name}
                error={errors.name}
                id="name"
                type="text"
                placeholder="Name"
              />
              <input
                onChange={onChange}
                value={state.email}
                error={errors.email}
                id="email"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={onChange}
                value={state.password}
                error={errors.password}
                id="password"
                type="password"
                placeholder="Password"
              />
              <input
                onChange={onChange}
                value={state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                placeholder="Confirm Password"
              />
              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_Register;
