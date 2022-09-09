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
}