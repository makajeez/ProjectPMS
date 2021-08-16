"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectTopicsComponent = void 0;
var core_1 = require("@angular/core");
var ProjectTopicsComponent = /** @class */ (function () {
    function ProjectTopicsComponent(http) {
        this.http = http;
        this.topic = [
            {
                topic: 'Desgin and Implementation of an Automotive system',
                supervisor: 'A.A.Datti',
                date: '09/24/2009'
            },
            {
                topic: 'Design and implementation of an E-coomerce website',
                supervisor: 'Malam Saminu',
                date: '09/24/2009'
            },
            {
                topic: 'Design and implementation of an E-coomerce website',
                supervisor: 'Malam Sagir',
                date: '09/24/2009'
            },
            {
                topic: 'Design and implementation of an image recognition system',
                supervisor: 'Dr F U Ambursa',
                date: '09/24/2009'
            },
            {
                topic: 'Automotive system',
                supervisor: 'Malam Abu Ismail',
                date: '09/24/2009'
            },
            {
                topic: 'Desgin and Implementation of anAutomotive system',
                supervisor: 'Malama Maryam',
                date: '09/24/2009'
            },
            {
                topic: 'Design and implementation of an E-coomerce website',
                supervisor: 'A.A.Datti',
                date: '09/24/2009'
            },
            {
                topic: 'Design and implementation of an image recognition system',
                supervisor: 'A.A.Datti',
                date: '09/24/2009'
            }
        ];
    }
    ProjectTopicsComponent.prototype.ngOnInit = function () {
        this.getTopics();
    };
    ProjectTopicsComponent.prototype.getTopics = function () {
        var _this = this;
        return this.http.get('https://project-pms.herokuapp.com/upload_topic/').subscribe(function (data) {
            _this.topics = data;
        });
    };
    ProjectTopicsComponent = __decorate([
        core_1.Component({
            selector: 'app-project-topics',
            templateUrl: './project-topics.component.html',
            styleUrls: ['./project-topics.component.css']
        })
    ], ProjectTopicsComponent);
    return ProjectTopicsComponent;
}());
exports.ProjectTopicsComponent = ProjectTopicsComponent;
