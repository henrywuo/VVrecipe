/* File that creates the model for the Comments attached to each post.
This model is used to create comments that are stored in MongoDB to follow
the same structure by storing a name, image, body, and date. */

var mongoose = require('mongoose');

var Comment = mongoose.model('Comment', {
    name: String,
    image: {
        data: String,
        contentType: String
    },
    body: String,
    date: String,
});

module.exports = Comment;