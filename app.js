const express = require('express');
const app = express();
const cors = require('cors');


//Middleware

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//Controller

app.use('/api/cases', require('./controllers/controller'))
app.use('/api/status', require('./controllers/controller'))


// app.use('/api/status/:id', require('./controllers/controller'))

module.exports = app;




