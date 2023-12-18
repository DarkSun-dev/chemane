const mongoose = require('mongoose')
const tempSchema = new mongoose.Schema({
    searchID: {
        type: String,
        required: true,
        unique: true,
        description: 'ID'
    },
    requestID: {
        type: String,
        required: true,
        description: 'ID'
    },
    mentorID: {
        type: String,
        required: true,
        description: 'ID'
    }
})
const Temp = mongoose.model('Temp', tempSchema)
module.exports = Temp