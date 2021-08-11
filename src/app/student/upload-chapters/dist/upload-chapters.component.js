"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UploadChaptersComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UploadChaptersComponent = /** @class */ (function () {
    function UploadChaptersComponent(fb, route, serve, toastr, http) {
        this.fb = fb;
        this.route = route;
        this.serve = serve;
        this.toastr = toastr;
        this.http = http;
        this.src = '';
        this.loading = false;
        this.supervisors = ['Dr. Faruk Umar Ambursa', 'Dr.Khalid', 'Mal. S M Tanimu'];
        this.chapters = ['Chapter One', 'Chapter Two', 'Chapter Three', 'Chapter Four', 'Chapter Five'];
    }
    UploadChaptersComponent.prototype.ngOnInit = function () {
        this.ProjectChapterForm = this.fb.group({
            chapter_number: ['', forms_1.Validators.required],
            chapter_file: ['', forms_1.Validators.required],
            supervisor: ['', forms_1.Validators.required],
            student: this.serve.currentUser.username,
            status: 'Pending'
        });
    };
    UploadChaptersComponent.prototype.onFileSelect = function (event) {
        var _a, _b;
        var file = (_a = this.ProjectChapterForm.get('chapter_file')) === null || _a === void 0 ? void 0 : _a.value.split('.');
        if (file[file.length - 1] === 'pdf') {
            this.src = 'assets/fileIcon/pdf.jpeg';
        }
        else if (file[file.length - 1] === 'doc' || 'docx') {
            this.src = 'assets/fileIcon/doc.jpeg';
        }
        if (event.target.files.length > 0) {
            var chapterFile = event.target.files[0];
            (_b = this.ProjectChapterForm.get('chapter_file')) === null || _b === void 0 ? void 0 : _b.setValue(chapterFile);
        }
    };
    UploadChaptersComponent.prototype.publish = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        this.loading = true;
        var formData = new FormData();
        formData.append('chapter_number', (_a = this.ProjectChapterForm.get('chapter_number')) === null || _a === void 0 ? void 0 : _a.value);
        formData.append('chapter_file', (_b = this.ProjectChapterForm.get('chapter_file')) === null || _b === void 0 ? void 0 : _b.value);
        formData.append('supervisor', (_c = this.ProjectChapterForm.get('supervisor')) === null || _c === void 0 ? void 0 : _c.value);
        formData.append('student', (_d = this.ProjectChapterForm.get('student')) === null || _d === void 0 ? void 0 : _d.value);
        formData.append('status', (_e = this.ProjectChapterForm.get('status')) === null || _e === void 0 ? void 0 : _e.value);
        return this.http.post(this.serve.api + "/chapter/", formData).subscribe({
            next: function (data) {
                _this.loading = false;
                _this.toastr.success('Uploaded Successfully', 'Success', { timeOut: 3000 });
                _this.route.navigate(['']);
            },
            error: function (error) {
                _this.loading = false;
                _this.toastr.error("" + error, '', { timeOut: 3000 });
                _this.route.navigate(['']);
            }
        });
    };
    UploadChaptersComponent = __decorate([
        core_1.Component({
            selector: 'app-upload-chapters',
            templateUrl: './upload-chapters.component.html',
            styleUrls: ['./upload-chapters.component.css']
        })
    ], UploadChaptersComponent);
    return UploadChaptersComponent;
}());
exports.UploadChaptersComponent = UploadChaptersComponent;
