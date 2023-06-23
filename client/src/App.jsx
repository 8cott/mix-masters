import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React, { Component } from "react";
import './index.css';

import HomePage from './components/HomePage';
import CreateDrink from './components/CreateDrink';
import ShowDrinkList from './components/ShowDrinkList';
import ShowDrinkDetails from './components/ShowDrinkDetails';
import UpdateDrinkInfo from './components/UpdateDrinkInfo';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
import Login_Register from './components/auth/Login_Register';

// import Navbar from './components/layout/Navbar';
// import Landing from './components/layout/Landing';

// import AboutUs from './components/AboutUs';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route exact path='/show-drink-list' element={<ShowDrinkList />} />
          <Route path='/create-drink' element={<CreateDrink />} />
          <Route path='/edit-drink/:id' element={<UpdateDrinkInfo />} />
          <Route path='/show-drink/:id' element={<ShowDrinkDetails />} />
          {/* <Route path='/register' element={<Register/>} /> */}
          <Route path='/login' element={<Login_Register/>} />
          {/* <Route path='/' element={<AboutUs/>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;