/**
 * Created by Shahar on 14/02/2017.
 */


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2MapModule } from 'ng2-map';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { Routing } from './app.routing';
import { ReversePipe } from './reverse';
//import {AppRoutingModule, routingComponents} from './app.routing';

@NgModule({
    imports: [ BrowserModule, HttpModule, FormsModule, Routing, Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDMesUgCIGArEb7YpDtzz7S0Z-cXg-Us5c'}) ],
    declarations: [AppComponent, PostsComponent, HomeComponent, MapComponent, ReversePipe ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
