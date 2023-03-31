const router = require("express").Router()

const {addComment} = require("../models/commentModel")

router.post("/", addComment)


module.exports = router;