const factory = require('../Design/factory')
exports.activityProvider = factory.sendJsonParams({
    name: 'Avaliação de actividade de exercícios físicos',
    config_url: process.env.HOST + '/page/configActivity',//react-dom-route to acess page to create IAP
    json_params_url: process.env.HOST + '/api/json_params_list',
    user_url: process.env.HOST + '/api/deployActivity',
    analytics_url: process.env.HOST + '/api/analytics',
    analytics_list_url: process.env.HOST + '/api/analytics_list'
})

exports.json_params_list = factory.sendJsonParams({
    IAP_ID: {
        type: String,
        required: true,
        unique: true,
        description: 'ActivityPlanID'
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
            default: 'Exercícios a serem realizados nas sessões das actividades físicas'
        }
    },
    sessions_per_week: {
        type: Number,
        required: true,
        description: 'Numero de sessões de treino por semana'
    },
    sessions_duration: {
        type: Number,
        required: true,
        description: 'Media de duração das sessões de treino'
    },
    IAP_periodicity: {
        type: String,
        required: true,
        description: 'Prazo do IAP'
    }
})

exports.analytics_list = factory.sendJsonParams({
    IAP_ID: {
        type: String,
        required: true,
        description: 'ActivityPlanID'
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
        type: String,
        required: true,
        description: 'Peso'
    },
    bpm: {
        type: String,
        required: true,
        description: 'Media dos batimentos cardíacos'
    },
    lost_calories: {
        type: Number,
        required: true,
        description: 'Calorias perdidas'
    },
    distance: {
        type: String,
        required: true,
        description: 'Distancia total percorida na sessão de treino'
    },
    training_performance: {
        type: Number,
        required: true,
        description: 'Calorias perdidas'
    }
})

