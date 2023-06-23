// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('./config/db')
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/AuthRoute');

// CONFIGURATION
require('dotenv').config({ path: './.env' })
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cookieParser());

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);   
  next();
});

// ROUTES
app.get('/', (req, res) => {
  res.redirect('/drinks');
});
app.use('/', authRoute);

// DRINKS
const drink_controller = require('./controllers/drink_controller.js');
app.use('/drinks', drink_controller);

// 404 Page
app.use('*', (req, res) => {
    res.send('404')
  })  

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

module.exports = app;