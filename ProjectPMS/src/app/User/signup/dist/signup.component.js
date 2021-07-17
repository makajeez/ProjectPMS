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
var SignupComponent = /** @class */ (function () {
    // entities = ['Student', 'Project Supervisor', 'Project Coordinator'];
    function SignupComponent(fb, http, service) {
        this.fb = fb;
        this.http = http;
        this.service = service;
        this.ApiUrl = 'http://127.0.0.1:8000/signup/';
        this.loading = false;
        this.hide = true;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            // entity: '' ,
            FirstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            LastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            Email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            Phone: ['', [forms_1.Validators.required, forms_1.Validators.minLength(11), forms_1.Validators.maxLength(11)]],
            RegistrationNo: ['', [forms_1.Validators.required, forms_1.Validators.minLength(16), forms_1.Validators.maxLength(16)]],
            Password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        });
    };
    SignupComponent.prototype.signUp = function () {
        // const val = this.signupForm.value;
        var val = this.signupForm.value;
        console.log(val);
        return this.http.post(this.ApiUrl, JSON.stringify(val));
        // this.service.registerUser(val) //.subscribe(res: any => 
        //alert(res.toString())
        // );
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
