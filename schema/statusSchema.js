const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({
_id: {type: Number },
status: { type: String}
})


const Status = mongoose.model('status', statusSchema)

module.exports = Status;