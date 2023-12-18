const mongoose = require('mongoose')
const searchActivitySchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
        description: 'StudentID'
    },
    searchID: {
        type: String,
        unique: true,
        required: true,
        description: 'SearchID + StudentID'
    },
    academic_education: {
        type: String,
        description: 'Formação académica'
    },
    academic_degree: {
        type: String,
        enum: ['Licenciatura', 'Mestrado', 'Doutoramento'],
        description: 'Grau/Nível de formação académica'
    },
    skills: {
        value: Array,
        description: {
            type: String,
            default: 'Especialidade/Competência' //multiple select input
        } 
    },
    time_experience: {
        type: Number,
        description: 'Tempo de experiência'
    },
    additional_information: {
        type: String,
        description: 'Informação adicional'
    },
    activity_status: {
        type: String,
        //enum: ['rejected', 'accepted', 'requested', 'found'],
        default: 'found',
        description: 'Estado da actividade de busca e sessão de mentoria'
    },
    data: String
})
const Search = mongoose.model('Search', searchActivitySchema)
module.exports = Search