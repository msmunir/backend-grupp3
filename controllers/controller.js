const router = require('express').Router();
const caseModel = require('../models/caseModel.js')




//create
router.post('/', caseModel.addNewCase);




