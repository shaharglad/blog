/**
 * Created by Shahar on 14/02/2017.
 */


import {Component} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../../Post';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    //selector: 'posts',
    templateUrl: 'posts.component.html'
})

export class PostsComponent {
    posts: Post[];
    title: string;
    author: string;
    email: string;
    location: string;
    postDate: Date;
    image: string;
    content: string;
    mapCoordinates: string;
    successMessage: boolean;

    constructor(private postService: PostService) {
        this.postService.getPosts()
            .subscribe(posts => {
                this.posts = posts;
            });
        this.successMessage = false;
    }

    isSuccessMessageVisible(showSuccessMessageBool) {
        if (showSuccessMessageBool) {
            this.successMessage = true;
        }
        else
            this.successMessage = false;
    }

    addPost(event) {
        event.preventDefault();
        var newPost = {
            title: this.title,
            author: this.author,
            email: this.email,
            postDate: new Date().toLocaleDateString(),
            location: this.location,
            image: this.image,
            content: this.content,
            mapCoordinates: this.mapCoordinates
        }

        this.postService.addPost(newPost)
            .subscribe(post => {
                this.posts.push(post);
                this.title = '';
                this.author = '';
                this.email = '';
                this.location = '';
                this.image = '';
                this.postDate = null;
                this.content = '';
                this.mapCoordinates = '';
            });
    }

    deletePost(id) {
        var posts = this.posts;

        this.postService.deletePost(id).subscribe(data => {
            if (data.n == 1) {
                for (var i = 0; i < posts.length; i++) {
                    if (posts[i]._id == id) {
                        posts.splice(i, 1);
                    }
                }
            }
        });
    }

    updatePost(post) {
        var _post = {
            _id: post._id,
            title: post.title,
            author: post.author,
            email: post.email,
            location: post.location,
            image: post.image,
            postDate: post.postDate,
            content: post.content,
            mapCoordinates: post.mapCoordinates
        };

        this.postService.updatePost(_post).subscribe(data => {
            this.title = '';
            this.author = '';
            this.email = '';
            this.location = '';
            this.image = '';
            this.postDate = null;
            this.content = '';
            this.mapCoordinates = '';
        });
    }

}