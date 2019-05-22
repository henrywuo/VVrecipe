const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
    if (req.session.user) {
        const user = req.session.user;
        Post.find({ _id: { $in : user.saved}}, (err, s) => {
            if (err) return next(err);
            res.render('profile', {
                user: user.username,
                first: user.firstName,
                last: user.lastName,
                image: user.image,
                bio: user.bio,
                recipes: user.recipes,
                saved: s,
                likes: user.likes
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