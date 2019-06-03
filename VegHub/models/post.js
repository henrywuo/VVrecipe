/* MongoDB model for the Posts that stores information such as the user, name
of the food/recipe, image connected to it, body (message), date of the post,
any tags, the recipe itself, ingredients, likes, and comments */

var mongoose = require('mongoose');

var Post = mongoose.model('Post', {
    user: String,
    name: String,
    image: {
        data: String,
        contentType: String
    },
    body: String,
    date: String,
    tags: [],
    recipe: [],
    ingredients: [],
    likes: [],
    comments: []
});

module.exports = Post;


