const Analytics = require('../models/analyticsModel')
const Search = require('../models/searchActivityModel')
const fs = require('fs')
const path = require('path')
const Temp = require('../models/tempModel')
const Request = require('../models/RequestModel')
    exports.createRequest = async (req, res) => {
        console.log(req.body);


        try {
            const doc = await Request.create(req.body)
            const docUpdated = await Search.findByIdAndUpdate(req.body.searchObjectID, { activity_status: 'requested' }, {
                new: true,
                runValidators: true
            })

            const post = await Temp.create({
                searchID: req.body.searchObjectID,
                requestID: doc._id,
                mentorID: req.body.mentorID
            })

            res.send({
                status: 'success',
                temp: post,
                doc: doc,
                docUpdated: docUpdated
            })
        } catch (error) {
            console.log(error);
            res.send({ error })
        }
    }
    exports.create = async (req, res) => {
        try {
            const doc = await Search.create(req.body)
            console.log(doc);
            res.send({
                status: 'success',
                doc: doc,
                search_url: {
                    host: process.env.HOST,
                    path: `/getSearchActivity?searchID=${req.body.searchID}&studentID=${req.body.studentID}`
                }
            })
        } catch (error) {
            console.log(error);
            res.send({ error })
        }
    }


    exports.deployAnalytics = async (req, res) => {
        try {
            const doc = await Analytics.create(req.body)
            res.send({
                status: 'success',
                doc: doc
            })
        } catch (error) {
            console.log(error);
            res.send({ error })
        }
    }

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

    exports.getSearchActivity = async (req, res) => {
        try {
            const doc = await Search.find({ studentID: req.query.studentID })
            res.status(200).send({
                status: 'success',
                doc: doc
            })
        } catch (error) {
            res.send({ error })
        }
    }

    exports.getSearchActivities = async (req, res) => {
        try {
            const doc = await Search.find({ searchID: req.query.searchID, studentID: req.query.studentID })
            res.status(200).send({
                status: 'success',
                doc: doc
            })
        } catch (error) {
            res.send({ error })
        }
    }

    exports.findRequestID = async (req, res) => {
        try {
            const doc = await Temp.find({ requestID: req.query.requestID })
            if (doc.length == 0) {
                res.send('nodoc')
            } else {
                res.status(200).send({
                    status: 'success',
                    doc: doc[0].requestID
                })
            }

        } catch (error) {
            res.send({ error })
        }
    }

exports.updateSearch = async (req, res) => {
    const doc = await Search.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    })
  }

    exports.getMentors = async (req, res) => {
        let rawdata = fs.readFileSync(__dirname + "/data/Mentors.json", "utf8")
        const data = JSON.parse(rawdata)
        res.send({
            status: 'success',
            doc: data,
        })
    }


    exports.getTemp = async (req, res) => {
        try {
            const doc = await Temp.find({ mentorID: req.query.mentorID })
            if (doc.length == 0) {
                res.send({ status: 'nodoc' })
            } else {
                res.send({
                    status: 'success',
                    doc: data,
                })
            }
        } catch (error) {
            res.send({ error })
        }

    }

    exports.findRequest = async (req, res) => {
        try {
            const doc = await Temp.find()
            res.status(200).send({
                status: 'success',
                doc: doc
            })
    
        } catch (error) {
            res.send({ error })
        }
    }

    exports.getRequest = async (req, res) => {
        try {
            const doc = await Request.find()
            res.status(200).send({
                status: 'success',
                doc: doc
            })
    
        } catch (error) {
            res.send({ error })
        }
    }