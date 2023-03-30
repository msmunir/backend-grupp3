const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({
_id: {type: Number },
status: { type: String}
})


const Status = mongoose.model('Status', statusSchema)

module.exports = Status;