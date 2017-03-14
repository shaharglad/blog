/**
 * Created by Shahar on 14/02/2017.
 */


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//import {AppRoutingModule, routingComponents} from './app.routing';
import {routing} from './app.routing';
import {PostsComponent} from './components/posts/posts.component';
import {HomeComponent} from './components/home/home.component';

@NgModule({
    imports:      [ BrowserModule, HttpModule, FormsModule, /*AppRoutingModule*/ routing ],
    declarations: [AppComponent, PostsComponent /*routingComponents*/ , HomeComponent ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
