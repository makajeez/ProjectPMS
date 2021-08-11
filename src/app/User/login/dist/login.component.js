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
    function LoginComponent(route, fb, http, toastr, serve) {
        this.route = route;
        this.fb = fb;
        this.http = http;
        this.toastr = toastr;
        this.serve = serve;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(16), forms_1.Validators.maxLength(16)]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        return this.serve.login(this.loginForm).subscribe({
            next: function (data) {
                _this.loading = false;
                _this.serve.isLoggedIn = true;
                _this.serve.currentUser = data;
                _this.toastr.success("Logged In Successfully", 'Success', { timeOut: 5000 });
                if (data.username.match(/^CST/i)) {
                    _this.route.navigate(['/']);
                }
                else {
                    _this.route.navigate(['/supervisor']);
                }
            },
            error: function (error) {
                _this.loading = false;
                _this.toastr.error("Check Your Credentials, That's All We Know", 'Error', { timeOut: 5000 });
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
