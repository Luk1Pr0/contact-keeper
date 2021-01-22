const express = require('express');
const connectDB = require('./config/db');

const app = express();

const port = process.env.PORT || 5000;

// Init middleware
app.use(express.json({ extended: false }));

// Connect database to the server
connectDB();

// Run server on given port
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get('/', (req, res) => res.json({ "msg": "Welcome to the CK API" }));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


