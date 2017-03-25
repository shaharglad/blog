/**
 * Created by Tomer on 21/03/2017.
 */

import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../../Post';
import 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'filters',
    templateUrl: 'search.component.html'
})

export class SearchComponent {
    author: string;
    content: string;
    posts: Post[];

    constructor(private postService:PostService) {
        this.postService = postService;
    }

    filterPosts(){
        let _filter = {
            author: this.author,
            content: this.content
        }
        console.log("Filtering JSON:" + _filter);
        this.postService.filterPosts(_filter)
            .subscribe(posts => this.posts = posts);
    }
}