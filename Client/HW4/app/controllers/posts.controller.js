const Post = require('../models/post')

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
};

exports.createPost = (req, res) => {
    console.log("here post req")
    console.log(req.body)
    Post.create(req.body)
        .then(posts => {
            res.status(200).send(posts);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.updatePosts = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) throw err;
        res.status(200).send(post);
    }).catch(err => {
        console.log(err);
    });
}

exports.deletePost = (req, res) => {
    Post.deleteOne({ _id: req.params.id })
        .then(post => {
            res.status(200).send(post);
        })
        .catch(err => {
            console.log(err);
        });
}
