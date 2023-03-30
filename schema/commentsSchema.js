const mongoose = require('mongoose')

const {Schema} = mongoose;

const commentSchema = mongoose.Schema({
    Comments: {type: String}
})


module.exports = mongoose.model('Comment', commentSchema)