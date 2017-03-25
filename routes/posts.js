/**
 * Created by Shahar on 13/02/2017.
 */

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Admin:123456@ds151289.mlab.com:51289/postsdb', ['posts']);


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
router.post('/groupByAuthor', function (req, res, next) {
    var posts = req.body;

    console.log("posts received: " + JSON.stringify(posts));

    db.posts.aggregate([{ $group: { _id: "$author", posts: { $push: "$$ROOT"}}}], function (err, results) {
    if (err) {
        res.send(err);
    }
    console.log("results: " + JSON.stringify(results));
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
                res.json(result);
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
        updPost.title = post.title;
        updPost.author = post.author;
        updPost.content = post.content;
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