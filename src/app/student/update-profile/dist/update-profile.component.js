"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// declare let toastr: any;
var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent(fb, http, route, toastr) {
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.toastr = toastr;
        this.ApiUrl = 'http://127.0.0.1:8000/rest-auth/registration/';
        this.loading = false;
        this.hide = true;
    }
    UpdateProfileComponent.prototype.ngOnInit = function () {
        this.updateForm = this.fb.group({
            FirstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            LastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            Email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            Phone: [null, [forms_1.Validators.required, forms_1.Validators.minLength(11), forms_1.Validators.maxLength(11)]],
            RegistrationNo: ['', [forms_1.Validators.required, forms_1.Validators.minLength(16), forms_1.Validators.maxLength(16)]],
            ProfilePics: [null, [forms_1.Validators.required]]
        });
    };
    UpdateProfileComponent.prototype.update = function () {
        this.loading = true;
    };
    UpdateProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-update-profile',
            templateUrl: './update-profile.component.html',
            styleUrls: ['./update-profile.component.css']
        })
    ], UpdateProfileComponent);
    return UpdateProfileComponent;
}());
exports.UpdateProfileComponent = UpdateProfileComponent;
