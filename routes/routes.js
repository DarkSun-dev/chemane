const express = require('express')
const searchActiivityController = require('../controllers/searchActiivityController')
const providerController = require('../controllers/providerController')
let router = express.Router()

router.get('/getRequests', searchActiivityController.getSearchActivity)
router.post('/searchActivity', searchActiivityController.create)
router.get('/json_params_list', providerController.json_params_list)
router.post('/deployActivity', searchActiivityController.deployAnalytics)
router.get('/deployAnalytics', searchActiivityController.getAnalytics)
router.get('/analytics_list', providerController.analytics_list)

router.post('/updateSearchActivity', searchActiivityController.updateSearch)
router.get('/getMentors', searchActiivityController.getMentors)
router.get('/getRequestID', searchActiivityController.findRequestID)
router.get('/getRequest', searchActiivityController.findRequest)
router.get('/getPedidos', searchActiivityController.getRequest)
router.get('/getTemp', searchActiivityController.getTemp)

router.post('/createRequest', searchActiivityController.createRequest)
module.exports = router