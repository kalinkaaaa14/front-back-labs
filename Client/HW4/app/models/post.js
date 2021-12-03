const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
        title: {
                type: String,
                required: true
        },
        content: {
                type: String,
                required: true
        },
        author: {
                type:String,
                required:false
        },
        tags: [{
                type: String,
                required: false
        }],
        imageUrl: {
                type:String,
                required:false
        },
        createdAt:{
                type:Date,
                required:true
        }
})

module.exports = mongoose.model('Post',postSchema)