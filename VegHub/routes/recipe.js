/* recipe.js handles all of the http requests for the recipe page. It
handles the requests for the search box when a user wants to search for
a certain recipe.*/

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const GridFSStream = require('gridfs-stream');
const Post = require('../models/post');
const URI = require('../keys/mongo');
const connection = mongoose.createConnection(URI);

// Init gfs
let gfs;
connection.once('open', () => {
  // Init stream
  gfs = GridFSStream(connection.db, mongoose.mongo);
  gfs.collection('uploads');
});


router.get('/', (req, res) => {
  Post.find({}).exec( (err, posts) => {
      if (err) throw err;
      gfs.files.find().toArray((err, files) => {
        if (req.session.user) {
          res.render('recipe', { 
            posts: posts,
            files: files,
            user: req.session.user.username 
          });
        } else {
          res.render('recipe', { 
            posts: posts,
            files: files 
          });
        }
      });
    });
});

router.get('/search/:name', (req, res) => {
  const search = req.params.name;
  Post.find({name: search}).exec( (err, posts) => {
    if (err) throw err;
    res.send(posts);
  });
});

router.post('/:id/save', (req, res) => {
  const user = req.session.user;
  User.findByIdAndUpdate(
    {_id: user._id},
    {$push : {saved: req.params.id}},
    {safe: true, upsert: true, new: true},
    (err, model) => {
      if (err) throw err;
  });
  res.redirect('/');
});

module.exports = {
    router: router
}