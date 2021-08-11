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
    function UploadCompletedProjectComponent(fb, http, route, toastr, serve) {
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.toastr = toastr;
        this.serve = serve;
        this.loading = false;
        this.supervisors = ['Dr. Faruk Umar Ambursa', 'Dr.Khalid', 'Mal. S M Tanimu'];
        this.years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    }
    UploadCompletedProjectComponent.prototype.ngOnInit = function () {
        this.projectForm = this.fb.group({
            project_title: ['', forms_1.Validators.required],
            student: ['', forms_1.Validators.required],
            year: ['', forms_1.Validators.required],
            supervisor: ['', forms_1.Validators.required],
            project_file: ['', forms_1.Validators.required]
        });
    };
    UploadCompletedProjectComponent.prototype.readUrl = function (event) {
        var _a, _b;
        var file = (_a = this.projectForm.get('project_file')) === null || _a === void 0 ? void 0 : _a.value.split('.');
        if (file[file.length - 1] === 'pdf') {
            this.src = 'assets/fileIcon/pdf.jpeg';
        }
        else if (file[file.length - 1] === 'doc' || 'docx') {
            this.src = 'assets/fileIcon/doc.jpeg';
        }
        if (event.target.files.length > 0) {
            var proFile = event.target.files[0];
            (_b = this.projectForm.get('chapter_file')) === null || _b === void 0 ? void 0 : _b.setValue(proFile);
        }
    };
    UploadCompletedProjectComponent.prototype.submit = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        this.loading = true;
        var formData = new FormData();
        formData.append('student', (_a = this.projectForm.get('student')) === null || _a === void 0 ? void 0 : _a.value);
        formData.append('project_title', (_b = this.projectForm.get('project_title')) === null || _b === void 0 ? void 0 : _b.value);
        formData.append('project_file', (_c = this.projectForm.get('project_file')) === null || _c === void 0 ? void 0 : _c.value);
        formData.append('year', (_d = this.projectForm.get('year')) === null || _d === void 0 ? void 0 : _d.value);
        formData.append('supervisor', (_e = this.projectForm.get('supervisor')) === null || _e === void 0 ? void 0 : _e.value);
        return this.http.post(this.serve.api + "/project/", formData).subscribe({
            next: function (data) {
                _this.loading = false;
                console.log(data);
                _this.toastr.success("Project Uploaded Successfully", 'Success', { timeOut: 2000 });
                _this.route.navigate(['/supervisor']);
            },
            error: function (error) {
                _this.loading = false;
                _this.toastr.error("Project Upload Failed \n\n        That's All we know", 'Error', { timeOut: 2000 });
            }
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
