// /**
//  * Created by Shahar on 27/02/2017.
//  */
//
// import {NgModule} from '@angular/core';
// import {Routes,RouterModule} from '@angular/router';
// import {HomeComponent} from './components/home/home.component';
// import {PostsComponent} from './components/posts/posts.component';
//
// const routes: Routes = [
//     {path: '', component: HomeComponent},
//     //{path: '', pathMatch: 'full', redirectTo: 'home'},
//     {path: 'home', component: HomeComponent},
//     {path: 'posts', component: PostsComponent},
// ];
//
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
//
// export class AppRoutingModule{}
//
// export const routingComponents = [HomeComponent, PostsComponent]
"use strict";
var router_1 = require("@angular/router");
var search_component_1 = require("./components/search/search.component");
var home_component_1 = require("./components/home/home.component");
var posts_component_1 = require("./components/posts/posts.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map