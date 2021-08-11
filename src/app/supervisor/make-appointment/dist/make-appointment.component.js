"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MakeAppointmentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MakeAppointmentComponent = /** @class */ (function () {
    function MakeAppointmentComponent(fb, http, toastr, serve, route) {
        this.fb = fb;
        this.http = http;
        this.toastr = toastr;
        this.serve = serve;
        this.route = route;
        this.students = ['Buhari Ahmed Alhassan', 'Khadija Mahmoud Falgore', 'Mubarak Daha Isa', 'Azeez Miudeen Owolabi'];
        this.loading = false;
    }
    MakeAppointmentComponent.prototype.ngOnInit = function () {
        this.appointmentForm = this.fb.group({
            student: ['', forms_1.Validators.required],
            date: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(10)]],
            time: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(5)]],
            venue: ['', forms_1.Validators.required],
            supervisor: this.serve.currentUser.username
        });
    };
    MakeAppointmentComponent.prototype.sendInvite = function () {
        var _this = this;
        this.loading = true;
        return this.http.post('http://127.0.0.1:8000/invite/', JSON.stringify(this.appointmentForm.value)).subscribe({
            next: function (data) {
                _this.loading = false;
                _this.toastr.success('Invitation Sent', 'Success', { timeOut: 3000 });
                _this.route.navigate(['/supervisor']);
            },
            error: function (error) {
                _this.loading = false;
                _this.toastr.error('An error occured, try again later', 'Error', { timeOut: 3000 });
            }
        });
    };
    MakeAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-make-appointment',
            templateUrl: './make-appointment.component.html',
            styleUrls: ['./make-appointment.component.css']
        })
    ], MakeAppointmentComponent);
    return MakeAppointmentComponent;
}());
exports.MakeAppointmentComponent = MakeAppointmentComponent;
