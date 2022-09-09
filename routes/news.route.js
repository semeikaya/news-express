const { Router } = require('express')
const router = Router()
const { newsController } = require('../controllers/news.controller.js')

router.post('/news', newsController.addNews)
router.delete('/news/:id', newsController.deleteNews)
router.patch('/news/:id', newsController.updateNews)
router.get('/news/', newsController.getNews)
router.get('/news/:id', newsController.getNewsbyID)
router.get('/news/category/:id', newsController.getNewsbyIDCategory)

module.exports = router