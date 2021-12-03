const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authors: [{
        type: String,
        required: true
    }],
    genre: {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    publisher:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Book',bookSchema)