const express = require('express')
const router = express.Router()
const Book = require('../models/book')


router.get('/', async(req,res) => {
    console.log("here")
    try{
           const books = await Book.find()
           res.json(books)
    }catch(err){
        res.status(400).send(err.message)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const book = await Book.findById(req.params.id)
        if(!book){
            res.status(404).json(book);
        }
        res.json(book)
    }catch(err){
        res.status(400).send(err.message)
    }
})


router.post('/', async(req,res) => {
    const book = new Book({
        title: req.body.title,
        authors: req.body.authors,
        genre: req.body.genre,
        price: req.body.price,
        publisher: req.body.publisher
    });

    try{
        const saved =  await book.save();
        res.json(saved);
    }catch(err){
        res.status(400).send(err.message);
    }
})

router.patch('/:id',async(req,res)=> {
    let params = {};
    for(let prop in req.body){
        if(req.body[prop]){
            params[prop] = req.body[prop];
        }
    }
    try{
        const book = await Book.findOneAndUpdate({
            _id: req.params.id,
        }, {
            $set: params
        },
            { new: true }
            );
        if(!book){
            res.status(404).json(book);
        }
        res.json(book);
    }catch(err){
       res.status(400).send(err.message);
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        const book = await Book.findOneAndRemove({
                _id: req.params.id,
            }
        );
        if(!book){
            res.status(404).json(book);
        }
        res.send("Successfully deleted!");
    }catch(err){
        res.status(400).send(err.message);
    }
})

module.exports = router