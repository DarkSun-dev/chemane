const mongoose = require('mongoose')
const iapSchema = new mongoose.Schema({
    IAP_ID: {
        type: String,
        required: true,
        unique: true,
        description: 'Inventive Activities Plan ID'
    },
    treineeID: {
        type: String,
        required: true,
        description: 'TreineeID'
    },
    coachID: {
        type: String,
        required: true,
        description: 'ActivityID'
    },
    exercises: {
        value: Array,
        description: {
            type: String,
            required: true,
            default: 'Exercícios a serem realizados nas sessões das actividades físicas'
        }
    },
    sessions_per_week: {
        type: Number,
        description: 'Numero de sessões de treino por semana'
    },
    sessions_duration: {
        type: Number,
        description: 'Media de duração das sessões de treino'
    },
    IAP_periodicity: {
        type: String,
        enum: ['1Week', '2Weeks', '1Month', '2Months', '3Months'],
        default: '1Week',
        description: 'Periodicidade do plano de actividade'
    }
})
const Iap = mongoose.model('Iap', iapSchema)
module.exports = Iap