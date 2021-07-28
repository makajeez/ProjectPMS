"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, fb, http, toastr
    // private serve: SharedService
    ) {
        this.route = route;
        this.fb = fb;
        this.http = http;
        this.toastr = toastr;
        this.loading = false;
        this.apiUrl = 'http://127.0.0.1:8000/user/';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            RegistrationNo: ['', [forms_1.Validators.required, forms_1.Validators.minLength(16), forms_1.Validators.maxLength(16)]],
            Password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        });
        // this.auth();
    };
    LoginComponent.prototype.login = function () {
        this.loading = true;
        var body = this.loginForm.value;
        // // console.log(body, this.users);
        // this.users.forEach((user: { RegistrationNo: any; Password: any; }) => {
        //   if (user?.RegistrationNo === body.get('RegistrationNo')?.value && user?.Password === body.get('Password')?.value) {
        //     this.loading = false;
        //     this.toastr.success('Logged In Successfully', 'Success', {timeOut: 3000});
        //     this.route.navigate(['']);
        //   } else if (user?.RegistrationNo !== body.get('RegistrationNo')?.value && user?.Password !== body.get('Password')?.value) {
        //     this.loading = false;
        //     this.toastr.error('Invalid Credentials', 'Error', {timeOut: 3000});
        //   }
        // });
        return this.http.post('http://127.0.0.1:8000/rest-auth', body).subscribe(function (data) {
            console.log(data);
        });
    };
    LoginComponent.prototype.auth = function () {
        var _this = this;
        this.http.get(this.apiUrl).subscribe({
            next: function (data) {
                _this.users = data;
                console.log(_this.users);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
