const Categories = require('../models/Categories.model.js')
module.exports.categoriesController = {
    addCategories: async (req, res) => {
        try {
            const category = await Categories.create({
                name: req.body.name,
            })
            res.json(category)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteCategories: async (req, res) => {
        try {
            await Categories.findByIdAndRemove(req.params.id)
            res.json('Категория удалена')
        } catch (error) {
            res.json(error.message)
        }

    },
    getCategories: async (req, res) => {
        try {
            const news = await Categories.find()
            res.json(news)
        } catch (error) {
            res.json(error.message)
        }
    },
}