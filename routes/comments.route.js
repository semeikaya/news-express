const {Router} = require('express')
const router = Router()
const {commentsController} = require('../controllers/comments.controller.js')

router.post('/comments', commentsController.addComments)

module.exports = router