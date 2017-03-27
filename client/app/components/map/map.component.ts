import {Component} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../../Post';

@Component({
    moduleId: module.id,
    selector: 'map',
    //selector: 'map',
    templateUrl: 'map.component.html',
    styles: ['map.component.css']
})

export class MapComponent {
    posts: Post[];
    title: string;
    author: string;
    email: string;
    location: string;
    postDate: Date;
    image: string;
    content: string;
    latCoordinate: number;
    longCoordinate: number;
    successMessage: boolean;

    constructor(private postService: PostService) {
        this.postService.getPosts()
            .subscribe(posts => {
                this.posts = posts;
            });
    }




}