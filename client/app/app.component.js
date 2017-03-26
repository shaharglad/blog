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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var post_service_1 = require("./services/post.service");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(postService, router) {
        var _this = this;
        this.postService = postService;
        this.router = router;
        this.postService.topList()
            .subscribe(function (topList) {
            _this.topList = topList;
        });
        console.log(this.router.url);
        this.setActive('home');
    }
    AppComponent.prototype.setActive = function (choice) {
        if (this.currentChoice == choice) {
            return;
        }
        this.currentChoice = choice;
        console.log(this.currentChoice);
    };
    AppComponent.prototype.getActive = function (choice) {
        if (this.currentChoice == choice) {
            return "active";
        }
        else {
            return "not-active";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        providers: [post_service_1.PostService]
    }),
    __metadata("design:paramtypes", [post_service_1.PostService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map