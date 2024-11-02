const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');
const app = express();

// Set up EJS view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

// Home route
app.get('/', (req, res) => res.render('index'));

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
