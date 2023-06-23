import React, { useState, useEffect } from "react"; // Added useEffect
// import { Link, Redirect } from "react-router-dom";
import NavBar from "../NavBar";
import "../../../../client/src/login.css";

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

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Added isLoggedIn state

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
    console.log("isLoggedIn changed:", isLoggedIn); // Log when isLoggedIn changes

  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const onSubmit = (e, formName) => {
    e.preventDefault();

    if (formName === "login") {
      const userData = {
        email: state.loginemail,
        password: state.loginpassword,
      };

      fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.token) {
            localStorage.setItem("jwtToken", data.token);
            setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
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

      fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        .catch((error) => console.error("Error:", error));
    }
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
  }

  const { errors } = state;

  // if (isLoggedIn) {
  //   return <Redirect to="/" />;
  // }

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