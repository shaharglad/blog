/**
 * Created by Shahar on 14/02/2017.
 */

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{

    constructor(private http: Http){
        console.log('sh Post Service Initialized...');
    }

    getPosts(){
        return this.http.get('/api/posts')
            .map(res => res.json());
    }

    filterPosts(filter){
        console.log("Arrived to post service");
        console.log("filter is: " + JSON.stringify(filter));
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/filter', JSON.stringify(filter), {headers: headers})
            .map(res => res.json());
    }

    addPost(newPost){
        console.log("Arrived to post service");
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/post', JSON.stringify(newPost), {headers: headers})
            .map(res => res.json());
    }

    deletePost(id){
        return this.http.delete('/api/post/'+id)
            .map(res => res.json());
    }

    updatePost(post){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/post/'+post._id, JSON.stringify(post), {headers: headers})
            .map(res => res.json());
    }

    topList(){
        return this.http.get('/api/topList')
            .map(res => res.json());
    }

}