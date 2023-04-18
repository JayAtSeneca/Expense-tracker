const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'temp/' })
const passport = require('passport')

const { authenticator } = require('../../middleware/auth')
const userController = require('../../controllers/userController')

// Routes
router.get('/login', userController.getLoginPage)

// Export router
module.exports = router