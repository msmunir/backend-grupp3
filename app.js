const express = require('express');
const app = express();
const cors = require('cors');


//Middleware

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//Controller

app.use('/api/cases', require('./controllers/caseController'))

app.use('/api/comments', require('./controllers/commentController.js'))

app.use('/api/statuses', require('./controllers/statusController'))


module.exports = app;




