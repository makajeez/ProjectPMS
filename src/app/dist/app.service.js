"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.api = 'http://127.0.0.1:8000';
    }
    AppService.prototype.signUp = function (form) {
        var option = { headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            }) };
        return this.http.post(this.api + "/rest-auth/registration/", JSON.stringify(form.value), option);
    };
    AppService.prototype.login = function (form) {
        var option = { headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            }) };
        return this.http.post(this.api + "/api-token-auth/", JSON.stringify(form.value), option);
    };
    AppService.prototype.logout = function () {
        this.currentUser = null;
    };
    AppService.prototype.requestAppointment = function (formvalue) {
        return this.http.post(this.api + "/req_meeting/", JSON.stringify(formvalue.value));
    };
    AppService.prototype.getUsers = function () {
        return this.http.get(this.api + "/user/");
    };
    AppService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
// return fetch(`${this.api}/rest-auth/registration/`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(form.value)
// })
// .then(res => res.json())
// .then(data => {
//   console.log(data);
//   this.currentUser = data;
//   this.router.navigate(['/login']);
//   this.toastr.success(`User ${form.get('username')?.value} Registered Successfully`, 'Success', {timeOut: 5000});
// })
// .catch(err => {
//   console.log(err);
//   // this.toastr.success(`User ${form.get('username')?.value} Registered Successfully`, 'Success', {timeOut: 5000});
// });
