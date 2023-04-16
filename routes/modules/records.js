// Require Express and Express router
const express = require('express')
const router = express.Router()

const recordController = require('../../controllers/recordController')

// Set up routes
router.get('/', recordController.getRecords)
router.get('/new', recordController.createRecord)

// Export router
module.exports = router