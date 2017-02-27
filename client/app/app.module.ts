/**
 * Created by Shahar on 14/02/2017.
 */


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule, routingComponents} from './app.routing';
//import {PostsComponent} from './components/posts/posts.component';

@NgModule({
    imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
    declarations: [AppComponent, /*PostsComponent*/ routingComponents ],
    bootstrap: [AppComponent]
})
export class AppModule { }
