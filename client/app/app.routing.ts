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


import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from "./components/search/search.component";
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { Pipe, PipeTransform } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'search', component: SearchComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);