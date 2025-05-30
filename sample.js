const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Dummy login status and error message
let logindata = { login: false, ErrorMessage: '' };

// Routes

// Home Page
app.get('/', (req, res) => {
  res.render('home');
});

// Login Page (GET)
app.get('/login', (req, res) => {
  res.render('login', { logindetails: logindata });
});

// Login Handler (POST)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'jagruthi' && password === '123') {
    logindata = { login: true, ErrorMessage: '' };
    res.redirect('/dashboard');
  } else {
    logindata = { login: false, ErrorMessage: 'Invalid Username or Password' };
    res.render('login', { logindetails: logindata });
  }
});

// Profile Page
app.get('/profile', (req, res) => {
  const user = {
    username: 'john doe',
    email: 'john@gmail.com',
  };
  res.render('profile', { user });
});

// Help Page
app.get('/help', (req, res) => {
  const user = {
    username: 'john doe',
    email: 'john@gmail.com',
  };
  res.render('help', { user });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
