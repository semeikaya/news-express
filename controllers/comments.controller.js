const Comments = require('../models/Comments.model.js')
module.exports.commentsController = {
    addComments: async (req, res) => {
        const {name, text, news} = req.body
        try {
            const comments = await Comments.create({
                name,
                text,
                news,
            })
            res.json(comments)
        } catch (error) {
            res.json(error.message)
        }
        
    },
}