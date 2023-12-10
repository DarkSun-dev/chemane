const mongoose = require('mongoose')
const analyticsSchema = new mongoose.Schema({
    IAP_ID: {
        type: String,
        required: true,
        description: 'Inventive Activities Plan ID'
    },
    treineeID: {
        type: String,
        required: true,
        description: 'TreineeID'
    },
    session_identifier: {
        type: Number,
        required: true,
        description: 'TreineeID'
    },
    trainee_weight: {
        type: Number,
        required: true,
        description: 'Peso (Kg)'
    },
    bpm: {
        type: Number,
        required: true,
        description: 'Media dos batimentos cardíacos'
    },
    lost_calories: {
        type: Number,
        required: true,
        description: 'Calorias perdidas'
    },
    distance: {
        type: Number,
        required: true,
        description: 'Distancia total percorida na sessão de treino'
    },
    training_performance: {
        type: Number,
        required: true,
        description: 'Calorias perdidas'
    },
    data: {
        type: String,
        default: new Date().toLocaleString()
    }
})
const Analytics = mongoose.model('Analytics', analyticsSchema)
module.exports = Analytics



