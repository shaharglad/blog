/**
 * Created by Shahar on 14/02/2017.
 */


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { Routing } from './app.routing';
import { ReversePipe } from './reverse';
//import {AppRoutingModule, routingComponents} from './app.routing';

@NgModule({
    imports: [ BrowserModule, HttpModule, FormsModule, Routing ],
    declarations: [AppComponent, PostsComponent, HomeComponent, MapComponent, ReversePipe ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
