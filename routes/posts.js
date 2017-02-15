/**
 * Created by Shahar on 13/02/2017.
 */

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Admin:123456@ds151289.mlab.com:51289/postsdb',['posts']);



/* GET All Posts */
router.get('/posts', function(req, res, next) {
    console.log("Arrived to/posts");
    db.posts.find(function(err, posts) {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
});

// Get Single Post
router.get('/post/:id', function(req, res, next){
    db.posts.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, post){
        if(err){
            res.send(err);
        }
        res.json(post);
    });
});

/* POST/SAVE a Post */
router.post('/post', function(req, res, next) {
    var post = req.body;
    if (!post.title) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        console.log("Going to save post..");
        db.posts.save(post, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});


// Delete Post
router.delete('/post/:id', function(req, res, next){
    db.posts.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, post){
        if(err){
            res.send(err);
        }
        res.json(post);
    });
});

// Update Post
router.put('/post/:id', function(req, res, next){
    var post = req.body;
    var updPost = {};

    if(post.title){
        updPost.title = post.title;
    }

    if(!updPost){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.posts.update({_id: mongojs.ObjectId(req.params.id)},updPost, {}, function(err, post){
            if(err){
                res.send(err);
            }
            res.json(post);
        });
    }
});

module.exports = router;