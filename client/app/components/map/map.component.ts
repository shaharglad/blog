import {Component} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../../Post';
import { Ng2MapModule } from 'ng2-map';

@Component({
    moduleId: module.id,
    selector: 'google-map',
    //selector: 'map',
    templateUrl: 'map.component.html',
    styles: ['map.component.css']
})

export class MapComponent {
    location: {
        lat: number,
        lng: number,
        name: string
    };

    posts: Post[];

    constructor(private postService: PostService) {
        this.postService.getPosts()
            .subscribe(posts => this.posts = posts);
    }


    //Canvas drawing
    ngAfterViewInit() { // wait for the view to init before using the element
        let canvasContainer = document.getElementById('mapSlogan');
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        console.log(this.posts);

        // happy drawing from here on
        canvas.width=600;
        canvas.height=120;
        context.fillStyle = "blue";
        context.font = "bold 40px Arial";
        context.strokeText("One life, travel well :)", (canvas.width / 4), (canvas.height / 2) + 8);

        canvasContainer.appendChild(canvas);
    }
    //End of Canvas drawing

}