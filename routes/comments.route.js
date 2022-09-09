const {Router} = require('express')
const router = Router()
const {commentsController} = require('../controllers/comments.controller.js')

router.post('/comments', commentsController.addComments)
router.delete('/comments/:id', commentsController.deleteComments)
router.get('/comments/news/:id', commentsController.getCommentsbyIDNews)

module.exports = router