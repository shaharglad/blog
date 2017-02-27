/**
 * Created by Shahar on 27/02/2017.
 */

import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PostsComponent} from './components/posts/posts.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    //{path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'posts', component: PostsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

export const routingComponents = [HomeComponent, PostsComponent]