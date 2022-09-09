const Comments = require('../models/Comments.model.js')
module.exports.commentsController = {
    addComments: async (req, res) => {
        const {name, text, newsId} = req.body
        try {
            const comments = await Comments.create({
                name,
                text,
                newsId,
            })
            res.json(comments)
        } catch (error) {
            res.json(error.message)
        }
        
    },
    deleteComments: async (req, res) => {
        try {
            await Comments.findByIdAndRemove(req.params.id)
            res.json('Комментарий удален')
        } catch (error) {
            res.json(error.message)
        }

    },

    getCommentsbyIDNews: async (req, res) => {
        const news = await Comments.find({newsID: req.params.id})
        res.json(news)
},
}