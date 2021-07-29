"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentListComponent = void 0;
var core_1 = require("@angular/core");
var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(http) {
        this.http = http;
        this.students = [];
    }
    StudentListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    StudentListComponent.prototype.getUsers = function () {
        var _this = this;
        return this.http.get('http://127.0.0.1:8000/user/').subscribe(function (data) {
            var _a;
            (_a = _this.students).push.apply(_a, data);
            console.log(data);
        });
    };
    StudentListComponent = __decorate([
        core_1.Component({
            selector: 'app-student-list',
            templateUrl: './student-list.component.html',
            styleUrls: ['./student-list.component.css']
        })
    ], StudentListComponent);
    return StudentListComponent;
}());
exports.StudentListComponent = StudentListComponent;
