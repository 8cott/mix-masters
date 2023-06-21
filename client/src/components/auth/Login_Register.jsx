import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

const Login_Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (e.target.name === "login") {
      // Login form submitted
      const userData = {
        email: state.email,
        password: state.password
      };

      fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.token) {
            localStorage.setItem('jwtToken', data.token);
          }
        })
        .catch((error) => console.error('Error:', error));
    } else if (e.target.name === "signup") {
      // Sign-up form submitted
      const newUser = {
        name: state.name,
        email: state.email,
        password: state.password,
        password2: state.password2
      };

      fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
    }
  };

  

  const { errors } = state;

  return (
    <div>
      
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="\src\login.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login/Register</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div>
          <NavBar/>
        </div>
        <div className="login-card">
          <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="login">
            <form noValidate onSubmit={onSubmit}>
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input onChange={onChange} value={state.email} error={errors.email} id="login-email" type="email" placeholder="Email"/>
              <input onChange={onChange} value={state.password} error={errors.password} id="login-password" type="password" placeholder="Password"/>
              <button type="submit">Login</button>
            </form>
          </div>

          <div className="signup">
            <form noValidate onSubmit={onSubmit}>
            <label for="chk" aria-hidden="true">Sign up</label>
              <input onChange={onChange} value={state.name} error={errors.name} id="name" type="text" placeholder="Name"/>
              <input onChange={onChange} value={state.email} error={errors.email} id="signup-email" type="email" placeholder="Email"/>                
              <input onChange={onChange} value={state.password} error={errors.password} id="signup-password" type="password" placeholder="Password"/>
              <input onChange={onChange} value={state.password2} error={errors.password2} id="password2" type="password" placeholder="Confirm Password"/>   
              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </body>
  </div>
  );
};

export default Login_Register;