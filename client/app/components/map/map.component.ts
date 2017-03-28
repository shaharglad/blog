import {Component, OnInit} from '@angular/core';
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

export class MapComponent implements OnInit {
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

    ngOnInit(){

    }

    //Canvas drawing
    ngAfterViewInit() { // wait for the view to init before using the element
        let canvasContainer = document.getElementById('mapTitle');
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        console.log(this.posts);

        // happy drawing from here on
        canvas.width=220;
        canvas.height=120;
        context.fillStyle = "green";
        context.font = "bold 48px Arial";
        context.strokeText("Maps", (canvas.width / 4), (canvas.height / 2) + 8);

        canvasContainer.appendChild(canvas);
    }
    //End of Canvas drawing

}