exports.activityProvider = (req, res) => {
    res.json({
        name: 'Actividade de busca de mentoria académica ',
        config_url: process.env.HOST + '/searchActivity/config',//react-dom-route to acess page to create IAP
        json_params_url: process.env.HOST + '/api/json_params_list',
        user_url: process.env.HOST + '/api/searchActivity',
        analytics_url: process.env.HOST + '/api/deployAnalytics',
        analytics_list_url: process.env.HOST + '/api/analytics_list'
    })
}

exports.json_params_list = (req, res) => {
    res.json({
        activityID: {
            type: String,
            default: 'Semanal',
            unique: true,
            description: 'Identificdor de instância da actividade de busca'
        },
        invenira_identifier: {
            type: String,
            description: 'Identificador de instância da actividade no INVEN!RA (skill)'
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
            type: Number,
            description: 'Especialidade/Competência'
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
            enum: ['pending', 'rejected', 'accepted', 'finished'],
            default: 'pending',
            description: 'Estado da actividade de busca e sessão de mentoria'
        }
    })
}

exports.analytics_list = (req, res) => {
    res.json({
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
        }
    })
}


