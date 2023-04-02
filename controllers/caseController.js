const router = require('express').Router();

const {addNewCase, getCases, getOneCaseId,  changeStatus} = require('../models/caseModel.js')




//create

router.post('/', addNewCase);

router.get('/', getCases)

router.get('/:id', getOneCaseId) // här kan du hämta status ockås

router.put('/:id', changeStatus)
// router.get('/statuses/:id', getUpdateStatus)


module.exports = router;

