const router = require('express').Router();

const {addNewCase, getCases, getOneCase,  changeStatus} = require('../models/caseModel.js')




//create

router.post('/', addNewCase);

router.get('/', getCases)

router.get('/:id', getOneCase) // här kan du hämta status ockås

router.put('/:id', changeStatus)
// router.get('/statuses/:id', getUpdateStatus)


module.exports = router;

