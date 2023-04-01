const router = require("express").Router()

const {addComment} = require("../models/commentModel")

router.put("/:id", addComment)


module.exports = router;