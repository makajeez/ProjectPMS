"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UploadProjectTopicsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UploadProjectTopicsComponent = /** @class */ (function () {
    function UploadProjectTopicsComponent(fb) {
        this.fb = fb;
        this.date = new Date;
    }
    UploadProjectTopicsComponent.prototype.ngOnInit = function () {
        this.uploadTopicForm = this.fb.group({
            Title: ['', forms_1.Validators.required],
            SubmittedBy: ['', forms_1.Validators.required],
            Date: this.date.getDay() + "/" + this.date.getMonth() + "/" + this.date.getFullYear()
        });
    };
    UploadProjectTopicsComponent = __decorate([
        core_1.Component({
            selector: 'app-upload-project-topics',
            templateUrl: './upload-project-topics.component.html',
            styleUrls: ['./upload-project-topics.component.css']
        })
    ], UploadProjectTopicsComponent);
    return UploadProjectTopicsComponent;
}());
exports.UploadProjectTopicsComponent = UploadProjectTopicsComponent;
