const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const remakeUrls = require('./modules/remakeUrls')

router.use('/', home)
router.use('/remakeUrls', remakeUrls)

module.exports = router


