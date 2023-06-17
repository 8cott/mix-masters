const express = require('express');
const connectDB = require('./config/db');
const connectDBAuth = require('./config/db-auth');
const cors = require('cors');
const bodyParser = require('body-parser')

const passport = require('passport')
const users = require('./routes/api/users')

// routes
const drinks = require('./routes/api/drinks');

const app = express();

// Connect Database
connectDB();
connectDBAuth();

// cors
app.use(cors({ origin: true, credentials: true }));

// Body Parser Middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
require('./config/passport')(passport);
app.use('/api/users', users);

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/drinks', drinks);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));