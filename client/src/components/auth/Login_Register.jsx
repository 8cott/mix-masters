<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import '../../../../client/src/login.css';
=======
import React, { useState, useEffect } from "react"; // Added useEffect
// import { Link, Redirect } from "react-router-dom";
import NavBar from "../NavBar";
import "../../../../client/src/login.css";
>>>>>>> e6753ccce42a4668b006fce95acdb4187d8bfac6

const Login_Register = () => {

  const [state, setState] = useState({
    name: "",
    loginemail: "",
    signupemail: "",
    loginpassword: "",
    signuppassword: "",
    signuppassword2: "",
    errors: {},
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    console.log('isLoggedIn changed:', isLoggedIn);
  }, [isLoggedIn]);
=======
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
    console.log("isLoggedIn changed:", isLoggedIn); // Log when isLoggedIn changes
>>>>>>> e6753ccce42a4668b006fce95acdb4187d8bfac6

  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const onSubmit = (e, formName) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log('onSubmit called');
    if (formName === 'login') {
=======

    if (formName === "login") {
>>>>>>> e6753ccce42a4668b006fce95acdb4187d8bfac6
      const userData = {
        email: state.loginemail,
        password: state.loginpassword,
      };
<<<<<<< HEAD
  
      console.log('Logging in:', userData); // Add this line to log the userData object
  
      fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
=======

      fetch("http://localhost:8000/api/users/login", {
        method: "POST",
>>>>>>> e6753ccce42a4668b006fce95acdb4187d8bfac6
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Login request failed');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Login response:', data); // Add this line to log the response data
          if (data.token) {
<<<<<<< HEAD
            localStorage.setItem('jwtToken', data.token);
            setIsLoggedIn(true);
=======
            localStorage.setItem("jwtToken", data.token);
            setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
>>>>>>> e6753ccce42a4668b006fce95acdb4187d8bfac6
          }
        })
        .catch((error) => console.error("Error:", error));
    } else if (formName === "signup") {
      const newUser = {
        name: state.name,
        email: state.signupemail,
        password: state.signuppassword,
        password2: state.signuppassword2,
      };
<<<<<<< HEAD
  
      console.log('Signing up:', newUser); // Add this line to log the newUser object
  
      fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
=======

      fetch("http://localhost:8000/api/users/register", {
        method: "POST",
>>>>>>> e6753ccce42a4668b006fce95acdb4187d8bfac6
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Signup request failed');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Signup response:', data); // Add this line to log the response data
          if (data.success) {

          }
        })
        .catch((error) => console.error("Error:", error));
    }
  };
<<<<<<< HEAD
  
  const { errors } = state;

  // Render different content based on isLoggedIn state
  if (isLoggedIn) {
    return <div>User successfully registered or logged in!</div>;
  }
=======

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
  }

  const { errors } = state;

  // if (isLoggedIn) {
  //   return <Redirect to="/" />;
  // }
>>>>>>> e6753ccce42a4668b006fce95acdb4187d8bfac6

  return (
    <div>
      <NavBar />
      <div className="login-card">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="login">
            <form noValidate onSubmit={(e) => onSubmit(e, "login")} name="login">
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input onChange={onChange} value={state.loginemail} error={errors.loginemail} id="loginemail" type="email" placeholder="Email"/>
              <input onChange={onChange} value={state.loginpassword} error={errors.loginpassword} id="loginpassword" type="password" placeholder="Password"/>
              <button type="submit" className="login-button">Login</button>            
            </form>
          </div>

          <div className="signup">
            <form noValidate onSubmit={(e) => onSubmit(e, "signup")} name="signup">
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input onChange={onChange} value={state.name} error={errors.name} id="name" type="text" placeholder="Name"/>
              <input onChange={onChange} value={state.signupemail} error={errors.signupemail} id="signupemail" type="email" placeholder="Email"/>                      
              <input onChange={onChange} value={state.signuppassword} error={errors.signuppassword} id="signuppassword" type="password" placeholder="Password"/>
              <input onChange={onChange} value={state.signuppassword2} error={errors.signuppassword2} id="signuppassword2" type="password" placeholder="Confirm Password"/>
              <button type="submit" className="signup-button">Sign up</button>
            </form>
          </div>

        </div>
      </div>
      {isLoggedIn && (
        <button onClick={logout} className="logout-button">Logout</button>
      )}
    </div>
  );
};

export default Login_Register;