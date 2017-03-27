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
        this.successMessage = false;
    }
    PostsComponent.prototype.isSuccessMessageVisible = function (showSuccessMessageBool) {
        if (showSuccessMessageBool) {
            this.successMessage = true;
        }
        else
            this.successMessage = false;
    };
    PostsComponent.prototype.addPost = function (event) {
        var _this = this;
        event.preventDefault();
        var newPost = {
            title: this.title,
            author: this.author,
            email: this.email,
            postDate: new Date().toLocaleDateString(),
            location: this.location,
            image: this.image,
            content: this.content,
            latCoordinate: this.latCoordinate,
            longCoordinate: this.longCoordinate
        };
        this.postService.addPost(newPost)
            .subscribe(function (post) {
            _this.posts.push(post);
            _this.title = '';
            _this.author = '';
            _this.email = '';
            _this.location = '';
            _this.image = '';
            _this.postDate = null;
            _this.content = '';
            _this.latCoordinate = null;
            _this.longCoordinate = null;
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
            email: post.email,
            location: post.location,
            image: post.image,
            postDate: post.postDate,
            content: post.content,
            latCoordinate: post.latCoordinate,
            longCoordinate: post.longCoordinate
        };
        this.postService.updatePost(_post).subscribe(function (data) {
            _this.title = '';
            _this.author = '';
            _this.email = '';
            _this.location = '';
            _this.image = '';
            _this.postDate = null;
            _this.content = '';
            _this.latCoordinate = null;
            _this.longCoordinate = null;
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