const factory = require('../Design/factory')
const Iap = require('../models/iapModel')
const Analytics = require('../models/analyticsModel')

exports.createIAP = async (req, res) => {
    console.log(req.body);
    try {
       const doc = await Iap.create(req.body)
        /*
        const docLinks = await Link.create({
            IAP_url: `/getActivity?IAP_ID=${req.body.IAP_ID}&treineeID=${req.body.treineeID}`
            IAP_ID: req.body.IAP_ID,
            treineeID: req.body.treineeID
        })*/

        res.send({
            status: 'success',
            doc: doc,
            IAP_url: {
                path: `/getActivity?IAP_ID=${req.body.IAP_ID}&treineeID=${req.body.treineeID}`
            }
        })
    } catch (error) {
        res.send({ error })
    }
}

exports.deployAnalytics = factory.createOne(Analytics)

exports.getAnalytics = async (req, res) => {
    try {
        const doc = await Analytics.find({ IAP_ID: req.query.IAP_ID, treineeID: req.query.treineeID })
        res.status(200).send({
            status: 'success',
            doc: doc
        })
    } catch (error) {
        res.send({ error })
    }
}

exports.getIAP = async (req, res) => {
    try {
        const doc = await IAP.find({ IAP_ID: req.query.IAP_ID, treineeID: req.query.treineeID })
        console.log(doc)
        res.status(200).send({
            status: 'success',
            doc: doc
        })
    } catch (error) {
        res.send({ error })
    }
}


