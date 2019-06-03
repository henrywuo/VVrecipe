/* profile.js handles the http requests for the profile page. It will send
MongoDB information, such as the user, any posts that they may have
saved/favorited, and recipes that they have uploaded. */

const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const User = require('../models/user');

router.get('/', (req, res) => {
    if (req.session.user) {
        const user = req.session.user;
        User.findById(user._id, (err, u) => {
            Post.find({ _id: { $in : u.saved}}, (err, s) => {
                if (err) throw err;
                Post.find({ _id : { $in : user.recipes}}, (err, r) => {
                    res.render('profile', {
                        user: user.username,
                        recipes: r,
                        saved: s,
                    });
                });
            });
        });  
    } else {
        res.render('profile');
    }
});

router.get('/logout', (req, res) => {
    req.session.user = null;
    res.redirect('/');
});


module.exports = {
    router: router
}