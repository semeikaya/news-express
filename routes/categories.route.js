const {Router} = require('express')
const router = Router()
const {categoriesController} = require('../controllers/categories.controller.js')

router.post('/', categoriesController.addCategories)

module.exports = router