"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UploadCompletedProjectComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UploadCompletedProjectComponent = /** @class */ (function () {
    function UploadCompletedProjectComponent(fb) {
        this.fb = fb;
        this.date = new Date();
    }
    UploadCompletedProjectComponent.prototype.ngOnInit = function () {
        this.projectForm = this.fb.group({
            ProjectTitle: ['', forms_1.Validators.required],
            Author: ['', forms_1.Validators.required],
            Date: this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear(),
            Supervisor: ['', forms_1.Validators.required],
            File: ['', forms_1.Validators.required]
        });
    };
    UploadCompletedProjectComponent = __decorate([
        core_1.Component({
            selector: 'app-upload-completed-project',
            templateUrl: './upload-completed-project.component.html',
            styleUrls: ['./upload-completed-project.component.css']
        })
    ], UploadCompletedProjectComponent);
    return UploadCompletedProjectComponent;
}());
exports.UploadCompletedProjectComponent = UploadCompletedProjectComponent;
