"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CompletedProjectComponent = void 0;
var core_1 = require("@angular/core");
var CompletedProjectComponent = /** @class */ (function () {
    function CompletedProjectComponent(http) {
        this.http = http;
        this.project = [
            {
                author: 'Usman Shehu Gezawa',
                topic: 'Design and implementation of an Image Recognition System',
                supervisor: 'Malam Saminu Muhammad',
                fileUrl: 'failFast.pdf',
                uploadDate: '9/23/2013'
            },
            {
                author: 'Mubarak Daha Isa',
                topic: ' Desgin and Implementation of an Image Recognition System',
                supervisor: 'Malam Abba Datti',
                fileUrl: 'failFast.pdf',
                uploadDate: '9/23/2013'
            },
            {
                author: 'Ibrahim Abdullahi Aliyu',
                topic: 'Image Recognition System',
                supervisor: 'Malam Sagir Tanimu',
                fileUrl: 'failFast.pdf',
                uploadDate: '9/23/2013'
            },
            {
                author: 'Usman Tugga',
                topic: 'Online shopping pllatform',
                supervisor: 'Dr. F U Ambursa',
                fileUrl: 'failFast.pdf',
                uploadDate: '9/23/2013'
            },
            {
                author: 'Buhari Ahmed Alhassan',
                topic: 'Image Recognition System',
                supervisor: 'Saminu Muhammad',
                fileUrl: 'failFast.pdf',
                uploadDate: '9/23/2013'
            },
        ];
        this.url = 'http://127.0.0.1:8000';
    }
    CompletedProjectComponent.prototype.ngOnInit = function () {
        this.getProject();
    };
    CompletedProjectComponent.prototype.getProject = function () {
        var _this = this;
        return this.http.get(this.url + "/project/").subscribe(function (data) {
            _this.projects = data;
            console.log(data);
        });
    };
    CompletedProjectComponent = __decorate([
        core_1.Component({
            selector: 'app-completed-project',
            templateUrl: './completed-project.component.html',
            styleUrls: ['./completed-project.component.css']
        })
    ], CompletedProjectComponent);
    return CompletedProjectComponent;
}());
exports.CompletedProjectComponent = CompletedProjectComponent;
