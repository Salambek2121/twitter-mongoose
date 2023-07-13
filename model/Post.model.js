const mongoose = require('mongoose');

const postSchema = mongoose.Schema ({
    text: String,
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref:  'User'
    },
    likes:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }],

    comment:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Comment'

    }]
})

const Post = mongoose.model('Post',  postSchema);
module.exports = Post;