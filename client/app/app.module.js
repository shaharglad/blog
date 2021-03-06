/**
 * Created by Shahar on 14/02/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng2_map_1 = require("ng2-map");
var app_component_1 = require("./app.component");
var common_1 = require("@angular/common");
var posts_component_1 = require("./components/posts/posts.component");
var home_component_1 = require("./components/home/home.component");
var map_component_1 = require("./components/map/map.component");
var app_routing_1 = require("./app.routing");
var reverse_1 = require("./reverse");
//import {AppRoutingModule, routingComponents} from './app.routing';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.Routing, ng2_map_1.Ng2MapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDMesUgCIGArEb7YpDtzz7S0Z-cXg-Us5c' })],
        declarations: [app_component_1.AppComponent, posts_component_1.PostsComponent, home_component_1.HomeComponent, map_component_1.MapComponent, reverse_1.ReversePipe],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map