/**
 * Created by Shahar on 14/02/2017.
 */


import { Component } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../../Post';

@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: 'posts.component.html'
})

export class PostsComponent {
    posts: Post[];
    title: string;
    author: string;
    // authorWebsite: string;
    // postDate: Date;
    content: string;

    constructor(private postService:PostService){
        this.postService.getPosts()
            .subscribe(posts => {
                this.posts = posts;
            });
    }

    addPost(event){
        event.preventDefault();
        var newPost = {
            title: this.title,
            author: this.author,
            //authorWebsite: this.authorWebsite,
            //postDate: new Date().toLocaleDateString(),
            content: this.content
        }

        this.postService.addPost(newPost)
            .subscribe(post => {
                this.posts.push(post);
                this.title = '';
                this.author = '';
                // this.authorWebsite = '';
                // this.postDate = null;
                this.content = '';
            });
    }

    deletePost(id){
        var posts = this.posts;

        this.postService.deletePost(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < posts.length;i++){
                    if(posts[i]._id == id){
                        posts.splice(i, 1);
                    }
                }
            }
        });
    }
}