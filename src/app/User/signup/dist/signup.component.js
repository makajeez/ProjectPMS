"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// declare let toastr: any;
var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, http, route, toastr) {
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.toastr = toastr;
        this.ApiUrl = 'http://127.0.0.1:8000/rest-auth/registration/';
        this.loading = false;
        this.hide = true;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            // entity: '' ,
            FirstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            LastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            Email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            Phone: [null, [forms_1.Validators.required, forms_1.Validators.minLength(11), forms_1.Validators.maxLength(11)]],
            RegistrationNo: ['', [forms_1.Validators.required, forms_1.Validators.minLength(16), forms_1.Validators.maxLength(16)]],
            Photo: 'default.jpg',
            Password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        });
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.loading = true;
        var body = this.signupForm;
        return this.http.post(this.ApiUrl, JSON.stringify(body.value)).subscribe({
            next: function (data) {
                var _a;
                _this.loading = false;
                _this.toastr.success("User " + ((_a = body.get('RegistrationNo')) === null || _a === void 0 ? void 0 : _a.value) + " Registered Successfully", 'Success', { timeOut: 5000 });
                _this.route.navigate(['login']);
            },
            error: function (error) {
                var _a;
                _this.loading = false;
                _this.toastr.error("User " + ((_a = body.get('RegistrationNo')) === null || _a === void 0 ? void 0 : _a.value) + " Not Registered", 'Error', { timeOut: 5000 });
            }
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
