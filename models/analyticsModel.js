const mongoose = require('mongoose')
const analyticsSchema = new mongoose.Schema({
    searchID: {
        type: String,
        required: true,
        description: 'Inventive Activities Plan ID'
    },
    studentID: {
        type: String,
        required: true,
        description: 'TreineeID'
    },
    mentorID: {
        type: String,
        required: true,
        description: 'TreineeID'
    },
    qualAnalytics: {
        request_number: {
            value: Number,
            description: {
                type: String,
                default: 'Número de actividade de busca'
            }
        },
        response_time: {
            value: Number,
            description: {
                type: String,
                default: 'Tempo de resposta do mentor sobre o pedido de mentoria'
            }
        }
    },
    quantAnalytics: {
        classification: {
            value: {
                type: String,
                enum: ['bad', 'low', 'good', 'verygood', 'excellent'],
                default: 'good'
            },
            description: {
                type: String,
                default: 'Classificação da mentoria'
            }
        },
        additional_information: {
            type: String,
            description: 'Informação adicional'
        }
    },
    data: {
        type: String,
        default: new Date().toLocaleString()
    }
})
const Analytics = mongoose.model('Analytics', analyticsSchema)
module.exports = Analytics



