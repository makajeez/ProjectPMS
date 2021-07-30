"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequestAppointmentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RequestAppointmentComponent = /** @class */ (function () {
    function RequestAppointmentComponent(fb) {
        this.fb = fb;
        this.loading = false;
        this.lecturers = ['Dr. Faruk Umar Ambursa', 'Dr.Khalid', 'Mal. S M Tanimu'];
    }
    RequestAppointmentComponent.prototype.ngOnInit = function () {
        this.reqForm = this.fb.group({
            Lecturer: ['', forms_1.Validators.required],
            Date: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(10)]],
            Time: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(5)]],
            Status: 'pending'
        });
    };
    RequestAppointmentComponent.prototype.save = function () {
        console.log(this.reqForm);
        return false;
    };
    RequestAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-request-appointment',
            templateUrl: './request-appointment.component.html',
            styleUrls: ['./request-appointment.component.css']
        })
    ], RequestAppointmentComponent);
    return RequestAppointmentComponent;
}());
exports.RequestAppointmentComponent = RequestAppointmentComponent;
