/**
 * Created by Shahar on 13/02/2017.
 */

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var Twitter = require('twitter');
var db = mongojs('mongodb://Admin:123456@ds151289.mlab.com:51289/postsdb', ['posts']);

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

/* GET All Posts */
router.get('/posts', function (req, res, next) {
    db.posts.find(function (err, posts) {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
});

// Get Single Post
router.get('/post/:id', function (req, res, next) {
    db.posts.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err, post) {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
});

// Filter Posts
router.post('/filter', function (req, res, next) {
    var filter = req.body;

    // Use Regex to let the user get results for strings that contains
    // his query and not case sensitive, not just the same -Tomer
    var author = ".*" + filter.author + ".*";
    var content = ".*" + filter.content + ".*";

    console.log("filter received: " + JSON.stringify(filter));

    db.posts.find({
        author: {$regex: author, $options: 'i'},
        //"title": title,
        content: {$regex: content, $options: 'i'}
    }, function (err, results) {
        if (err) {
            res.send(err);
        }
        console.log("results: " + JSON.stringify(results));
        res.json(results);
    });
});

// Group by author and count how many posts
router.get('/topList', function (req, res, next) {
    db.posts.aggregate([
        { $project: { _id: false, "author": true}},
        { $group: { _id: "$author", "total": { "$sum": 1 }}},
        { $sort: { "total": -1 }},
        { $limit: 3 }], function (err, results) {
    if (err) {
        res.send(err);
    }
    console.log("top results: " + JSON.stringify(results));
    res.json(results);
});
})
;

/* POST/SAVE a Post */
router.post('/post', function (req, res, next) {
    var post = req.body;
    if (!post.title) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        console.log("Going to save post..");
        db.posts.save(post, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                console.log('Post added.');
                res.json(result);

                // POST TO TWITTER
                client.post('statuses/update', {status: 'A New post is up! :)'},  function(error, tweet, response) {
                    if(error) throw error;
                    console.log('Tweet Posted.');
                });
            }
        })
    }
});

// Delete Post
router.delete('/post/:id', function (req, res, next) {
    db.posts.remove({_id: mongojs.ObjectId(req.params.id)}, function (err, post) {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
});

// Update Post
router.put('/post/:id', function (req, res, next) {
    var post = req.body;
    var updPost = {};

    if (post.title) {
        updPost.postDate = post.postDate;
        updPost.title = post.title;
        updPost.author = post.author;
        updPost.email = post.email;
        updPost.location = post.location;
        updPost.content = post.content;
        updPost.image = post.image;
    }

    if (!updPost) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.posts.update({_id: mongojs.ObjectId(req.params.id)}, updPost, {}, function (err, post) {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    }
});

module.exports = router;