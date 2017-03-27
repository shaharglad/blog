"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var posts_component_1 = require("./components/posts/posts.component");
var map_component_1 = require("./components/map/map.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'map', component: map_component_1.MapComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map