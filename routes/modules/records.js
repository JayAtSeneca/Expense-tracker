// Require Express and Express router
const express = require('express')
const router = express.Router()

const recordController = require('../../controllers/recordController')

// Set up routes
router.get('/', recordController.getRecords)
router.get('/new', recordController.createRecord)
router.post('/', recordController.postRecord)
router.get('/:type', recordController.getRecords)

// Export router
module.exports = router