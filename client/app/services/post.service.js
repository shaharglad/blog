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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        console.log('sh Post Service Initialized...');
    }
    PostService.prototype.getPosts = function () {
        return this.http.get('/api/posts')
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.filterPosts = function (filter) {
        console.log("Arrived to post service");
        console.log("filter is: " + JSON.stringify(filter));
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/filter', JSON.stringify(filter), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.addPost = function (newPost) {
        console.log("Arrived to post service");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/post', JSON.stringify(newPost), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.deletePost = function (id) {
        return this.http.delete('/api/post/' + id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.updatePost = function (post) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/post/' + post._id, JSON.stringify(post), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.topList = function () {
        return this.http.get('/api/topList')
            .map(function (res) { return res.json(); });
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map