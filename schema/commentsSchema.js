const mongoose = require('mongoose')

const {Schema} = mongoose;

const commentSchema = mongoose.Schema({
    comments: {type: String}
})


module.exports = mongoose.model('Comment', commentSchema)