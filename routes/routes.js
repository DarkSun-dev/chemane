const express = require('express')
const activityPlanController = require('../controllers/activityPlanController')
const providerController = require('../controllers/providerController')
let router = express.Router()

router.get('/getIAP', activityPlanController.getIAP)
router.post('/configActivity', activityPlanController.createIAP)
router.get('/json_params_list', providerController.json_params_list)
router.post('/deployActivity', activityPlanController.deployAnalytics)
router.get('/analytics', activityPlanController.getAnalytics)
router.get('/analytics_list', providerController.analytics_list)

module.exports = router