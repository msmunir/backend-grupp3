const mongoose = require('mongoose')



const commentSchema = new mongoose.Schema({
    caseId: {type: mongoose.Schema.Types.ObjectId, ref: "Case"},
    email:{ type: String},
    message:{type: String,}
})


module.exports = mongoose.model("comment", commentSchema)