var express = require('express')
var router = express.Router()

const fileController = require('../controllers/fileController')

router.post('/uploadImg', fileController.uploadImg)

router.post('/downloadImg',fileController.downloadImg)

router.post('/getfiles',fileController.getfiles)

module.exports = router