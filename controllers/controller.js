const router = require('express').Router();
const {addNewCase, getCases, getOneCase, getStatus, getUpdateStatus} = require('../models/caseModel.js')




//create
router.post('/', addNewCase);
router.get('/', getCases)
router.get('/:id', getOneCase)

router.get('/statuses', getStatus)
// router.get('/statuses/:id', getUpdateStatus)






module.exports = router;