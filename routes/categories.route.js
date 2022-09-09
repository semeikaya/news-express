const {Router} = require('express')
const router = Router()
const {categoriesController} = require('../controllers/categories.controller.js')

router.post('/categories', categoriesController.addCategories)
router.delete('/categories/:id', categoriesController.deleteCategories)
router.get('/categories', categoriesController.getCategories)

module.exports = router;