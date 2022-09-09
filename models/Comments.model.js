const mongoose = require('mongoose')
const commentsSchema = mongoose.Schema({
    name: String,
    text: String,
    newsId: mongoose.SchemaTypes.ObjectId,
})
const Comments = mongoose.model('Comments', commentsSchema)
module.exports = Comments