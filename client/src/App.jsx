import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { AuthContext } from './components/AuthContext';
import HomePage from './components/HomePage';
import CreateDrink from './components/CreateDrink';
import ShowDrinkList from './components/ShowDrinkList';
import ShowDrinkDetails from './components/ShowDrinkDetails';
import UpdateDrinkInfo from './components/UpdateDrinkInfo';
import AppBarMUI from './components/AppBarMUI';
import Signup from '../../client/src/components/Signup';
import Login from '../../client/src/components/Login';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Login_Register from './components/auth/Login_Register';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    // You may want to validate the JWT here

    if (jwt) {
      setIsLoggedIn(true);
      // Optionally, you could decode the JWT and set the user info
      // Let's assume you have a decodeJWT function
      // const decodedUser = decodeJWT(jwt);
      // setUser(decodedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <AppBarMUI />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/show-drink-list" element={<ShowDrinkList />} />
          <Route path="/create-drink" element={<CreateDrink />} />
          <Route path="/edit-drink/:id" element={<UpdateDrinkInfo />} />
          <Route path="/show-drink/:id" element={<ShowDrinkDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
