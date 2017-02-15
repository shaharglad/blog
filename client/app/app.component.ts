/**
 * Created by Shahar on 14/02/2017.
 */

import { Component } from '@angular/core';
import {PostService} from './services/post.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    //template: '<posts></posts>'
    templateUrl: 'app.component.html',
    providers:[PostService]
})

export class AppComponent { }
