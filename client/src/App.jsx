import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React, { Component } from "react";
import './App.css';

import HomePage from './components/HomePage';
import CreateDrink from './components/CreateDrink';
import ShowDrinkList from './components/ShowDrinkList';
import ShowDrinkDetails from './components/ShowDrinkDetails';
import UpdateDrinkInfo from './components/UpdateDrinkInfo';

// import Navbar from './components/layout/Navbar';
// import Landing from './components/layout/Landing';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;