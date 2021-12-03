const mongoose = require("mongoose");

const Image=mongoose.model(
    "image",
    new mongoose.Schema({
        url:String
    },{collection:"image"})
)

module.exports = Image;