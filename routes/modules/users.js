const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'temp/' })
const passport = require('passport')

const { authenticator } = require('../../middleware/auth')
const userController = require('../../controllers/userController')

// Routes
router.get('/login', userController.getLoginPage)
router.post(
    '/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/users/login',
      failureFlash: true
    })
  )
  

// Export router
module.exports = router