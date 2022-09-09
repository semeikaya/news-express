const News = require('../models/News.model.js')
module.exports.newsController = {
    addNews: async (req, res) => {
        const {header, text, category} = req.body
        try {
            const news = await News.create({
                header,
                text,
                category,
            })
            res.json(news)
        } catch (error) {
            res.json(error.message)
        }
        
    },
}
