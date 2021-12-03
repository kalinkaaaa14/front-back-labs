const Image = require('../models/image')

exports.getAllImages = async (req, res) => {
    const images = await Image.find()
    res.json(images)
};

exports.getImageById = async (req, res) => {
    console.log("GET IMAGE BY ID")
    console.log(req.params.id);
    try{
        const image = await Image.findById(req.params.id)
        if(!image){
            res.status(404).json(image);
        }
        console.log(image)
        let arr = [image]
        res.json(arr)
    }catch(err){
        res.status(400).send(err.message)
    }
};

exports.createImage = (req, res) => {

    Image.create(req.body)
        .then(images => {
            res.status(200).send(images);
        })
        .catch(err => {
            console.log(err);
        });
};
