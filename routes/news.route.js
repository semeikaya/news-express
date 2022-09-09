const {Router} = require('express')
const router = Router()
const {newsController} = require('../controllers/news.controller.js')

router.post('/news', newsController.addNews)

module.exports = router