/**
 * Created by Shahar on 27/02/2017.
 */


import { Component } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../../Post';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    posts: Post[];

    constructor(private postService: PostService) {
        this.postService.getPosts()
            .subscribe(posts => {
                this.posts = posts;
            });
    }
}
