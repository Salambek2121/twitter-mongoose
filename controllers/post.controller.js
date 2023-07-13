const Post = require('../model/Post.model');

module.exports.postController = {
    createPost: (req, res) => {
        Post.create({
            text: req.body.text,
            likes: req.body.likes,
            comment: req.body.comment,
            user: req.body.user


        }).then((data) => {
            res.json(data)
        })
    },

    deletePost: (req, res) => {
        Post.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },

    patchPost: (req, res) => {
        Post.findByIdAndUpdate(req.params.id, req.body).populate("likes").populate('comment').populate('user').then((data) => {
            res.json(data)
        })
    },

    getPost: (req, res) => {
        Post.find().then((data) => {
            res.json(data)
        })
    }
}