
const Comment = require('../model/comment.model');

module.exports.commentController = {
    createComment: (req,res) => {
        Comment.create({
            text: req.body.text,
            user: req.body.user
        }).then((data) => {
            res.json(data)
        });
    },



    deleteComment: (req,res) => {
        Comment.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },

    getComment: (req,res) => {
        Comment.find({}).then((data) => {
            res.json(data)
        })
    },
    patchComment: (req,res) => {
        Comment.findByIdAndUpdate(req.params.id).then((data) => {
            res.json(data)
        })
    }
}