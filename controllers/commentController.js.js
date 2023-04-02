const router = require("express").Router()

const {addComment} = require("../models/commentModel")

router.post("/:id", addComment)


module.exports = router;