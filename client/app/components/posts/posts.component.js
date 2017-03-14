/**
 * Created by Shahar on 14/02/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var post_service_1 = require("../../services/post.service");
var PostsComponent = (function () {
    function PostsComponent(postService) {
        var _this = this;
        this.postService = postService;
        this.postService.getPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    PostsComponent.prototype.addPost = function (event) {
        var _this = this;
        event.preventDefault();
        var newPost = {
            title: this.title,
            author: this.author,
            //authorWebsite: this.authorWebsite,
            //postDate: new Date().toLocaleDateString(),
            content: this.content
        };
        this.postService.addPost(newPost)
            .subscribe(function (post) {
            _this.posts.push(post);
            _this.title = '';
            _this.author = '';
            // this.authorWebsite = '';
            // this.postDate = null;
            _this.content = '';
        });
    };
    PostsComponent.prototype.deletePost = function (id) {
        var posts = this.posts;
        this.postService.deletePost(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < posts.length; i++) {
                    if (posts[i]._id == id) {
                        posts.splice(i, 1);
                    }
                }
            }
        });
    };
    PostsComponent.prototype.updatePost = function (post) {
        var _this = this;
        var _post = {
            _id: post._id,
            title: post.title,
            author: post.author,
            content: post.content
        };
        this.postService.updatePost(_post).subscribe(function (data) {
            _this.title = '';
            _this.author = '';
            // this.authorWebsite = '';
            // this.postDate = null;
            _this.content = '';
        });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        //selector: 'posts',
        templateUrl: 'posts.component.html'
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map