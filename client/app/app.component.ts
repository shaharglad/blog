/**
 * Created by Shahar on 14/02/2017.
 */

import {Component} from '@angular/core';
import {PostService} from './services/post.service';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [PostService]
})

export class AppComponent {
    topList: any;
    currentChoice: string;

    constructor(private postService: PostService, private router: Router) {
        this.postService.topList()
            .subscribe(topList => {
                this.topList = topList;
            });
        console.log(this.router.url);
        this.setActive('home');
    }

    setActive(choice: string): string {
        if (this.currentChoice == choice) {
            return
        }
        this.currentChoice = choice;
        console.log(this.currentChoice);
    }

    getActive(choice: string): string {
        if (this.currentChoice == choice) {
            return "active";
        }
        else {
            return "not-active";
        }
    }

}
