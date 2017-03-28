/**
 * Created by Shahar on 27/02/2017.
 */

import {Component} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../../Post';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    author: string;
    content: string;
    location: string;
    email: string;
    title: string;
    posts: Post[];
    filterChosen: string;

    constructor(private postService: PostService) {
        this.postService.getPosts()
            .subscribe(posts => this.posts = posts);
    }

    filterPosts(){
        let _filter = {
            author: this.author,
            content: this.content,
            location: this.location,
            email: this.email,
            title: this.title

        }
        console.log("Filtering JSON:" + _filter);
        this.postService.filterPosts(_filter, this.filterChosen)
            .subscribe(posts => this.posts = posts);
    }

    dropDownChoose(filterChosen: string){
        this.filterChosen = filterChosen;
    }


}
