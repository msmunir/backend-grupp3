const { models } = require('mongoose');
const mongoose = require('mongoose')

const {Schema} = mongoose;

const caseSchema = new Schema({
 email: {type: String, lowercase: true},
 subject:{ type: String},

 message: { type: String},
 status: {type: String},
 comments: [{
    type: mongoose.Schema.Types.ObjectId,
    // ref: comments
 }]
 
}, {
    timestamps: true
}
)




module.exports = mongoose.model('Case', caseSchema)