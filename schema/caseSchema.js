const { models } = require('mongoose');
const mongoose = require('mongoose')

const {Schema} = mongoose;

const caseSchema = new Schema({
 email: {type: String, lowercase: true},
 subject:{ type: String},
 message: { type: String}
})



module.exports = mongoose.model('Case', caseSchema)