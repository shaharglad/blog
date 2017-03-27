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

    ngAfterViewInit() { // wait for the view to init before using the element
        let canvasContainer = document.getElementById('mapTitle');
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');

        // happy drawing from here on
        canvas.width=220;
        canvas.height=120;
        context.fillStyle = "green";
        context.font = "bold 48px Arial";
        context.strokeText("Maps", (canvas.width / 4), (canvas.height / 2) + 8);

        canvasContainer.appendChild(canvas);
    }
}