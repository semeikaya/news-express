const News = require('../models/News.model.js')
module.exports.newsController = {
    addNews: async (req, res) => {
        const { header, text, categoryID } = req.body
        try {
            const news = await News.create({
                header,
                text,
                categoryID,
            })
            res.json(news)
        } catch (error) {
            res.json(error.message)
        }

    },
    deleteNews: async (req, res) => {
        try {
            await News.findByIdAndRemove(req.params.id)
            res.json('Новость удалена')
        } catch (error) {
            res.json(error.message)
        }

    },
    updateNews: async (req, res) => {
        const { header, text, categoryID } = req.body
        try {
            const news =  await News.findByIdAndUpdate(req.params.id, {
                header,
                text,
                categoryID,
            })
            res.json(news)
        } catch (error) {
            res.json(error.message)
        }

    },
    getNews: async (req, res) => {

        try {
            const news = await News.find()
            res.json(news)
        } catch (error) {
            res.json(error.message)
        }
    },
    getNewsbyID: async (req, res) => {

        try {
            const news = await News.findById(req.params.id)
            res.json(news)
        } catch (error) {
            res.json(error.message)
        }
    },
    getNewsbyIDCategory: async (req, res) => {
            const news = await News.find({categoryID: req.params.id})
            res.json(news)
    },
}
