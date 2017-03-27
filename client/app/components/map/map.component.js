"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var post_service_1 = require("../../services/post.service");
var MapComponent = (function () {
    function MapComponent(postService) {
        var _this = this;
        this.postService = postService;
        this.postService.getPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    MapComponent.prototype.ngAfterViewInit = function () {
        var canvasContainer = document.getElementById('mapTitle');
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        // happy drawing from here on
        canvas.width = 220;
        canvas.height = 120;
        context.fillStyle = "green";
        context.font = "bold 48px Arial";
        context.strokeText("Maps", (canvas.width / 4), (canvas.height / 2) + 8);
        canvasContainer.appendChild(canvas);
    };
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'map',
        //selector: 'map',
        templateUrl: 'map.component.html',
        styles: ['map.component.css']
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map