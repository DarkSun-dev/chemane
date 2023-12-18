const mongoose = require('mongoose')
const requestSchema = new mongoose.Schema({
    docID: {
        type: String,
        unique: true
    },
    requestID: {
        type: String,
        required: true,
        description: 'StudentID + SearchID'
    },
    mentorID: {
        type: String,
        required: true,
        description: 'MentorID'
    },
    search: Object,
    student: Object,
    data: String
})
const Request = mongoose.model('Request', requestSchema)
module.exports = Request