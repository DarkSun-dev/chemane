const express = require('express')
const paramsController = require('../controllers/providerController')
const router = express.Router()
router.get('/', paramsController.activityProvider)
module.exports = router