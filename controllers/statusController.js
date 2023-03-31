const router = require("express").Router()

const {findStatuses} = require("../models/statusModel")

router.get("/", findStatuses)


module.exports = router;