const mongoose = require("mongoose");

const Address=new mongoose.Schema({
        name: {
            type:String,
            required:true
        },
        surname: {
            type:String,
            required:true
        },
        middlename:{
         type:String,
         required:true
        },
        email: {
            type:String,
            required:true
        }
    })

module.exports = mongoose.model('address',Address);