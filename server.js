const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT ||  9999;

app.listen(PORT, () => console.log("Server running on: " + PORT))

//Todo: need to connect the db



