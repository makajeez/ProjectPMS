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
    function UploadProjectTopicsComponent(fb, http, toastr, route) {
        this.fb = fb;
        this.http = http;
        this.toastr = toastr;
        this.route = route;
        this.loading = false;
        this.date = new Date();
    }
    UploadProjectTopicsComponent.prototype.ngOnInit = function () {
        this.uploadTopicForm = this.fb.group({
            title: ['', forms_1.Validators.required],
            supervisor: ['', forms_1.Validators.required]
        });
    };
    UploadProjectTopicsComponent.prototype.logData = function () {
        var _this = this;
        this.loading = true;
        return this.http.post('http://127.0.0.1:8000/upload_topic/', JSON.stringify(this.uploadTopicForm.value)).subscribe({
            next: function (data) {
                _this.loading = false;
                _this.toastr.success('Successfully Uploaded', 'Success', { timeOut: 3000 });
                _this.route.navigate(['/supervisor']);
            },
            error: function (error) {
                _this.loading = false;
                _this.toastr.error('An error occured, try again later', 'Error', { timeOut: 3000 });
            }
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
