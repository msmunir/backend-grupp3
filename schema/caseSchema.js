
const mongoose = require('mongoose')

const {Schema} = mongoose;

const caseSchema =  Schema({
 email: {type: String, lowercase: true},
 subject:{ type: String},
 message: { type: String},
 status: {type: Number, ref: 'status', default: 1} ,
 comments: [{
    type: mongoose.Schema.Types.ObjectId,ref: "comment"}],
 
}, {timestamps: true}
)




module.exports = mongoose.model('Case', caseSchema)