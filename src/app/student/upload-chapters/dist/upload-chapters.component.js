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
    function UploadChaptersComponent(fb, http, route) {
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.ApiUrl = '127.0.0.1:8000';
        this.src = '';
        this.loading = false;
        this.supervisors = ['Dr. Faruk Umar Ambursa', 'Dr.Khalid', 'Mal. S M Tanimu'];
        this.chapters = ['Chapter One', 'Chapter Two', 'Chapter Three', 'Chapter Four', 'Chapter Five'];
    }
    UploadChaptersComponent.prototype.ngOnInit = function () {
        this.ProjectChapterForm = this.fb.group({
            ChapterNumber: ['', forms_1.Validators.required],
            Supervisor: ['', forms_1.Validators.required],
            ChapterFile: [null, forms_1.Validators.required],
            Status: 'pending'
        });
    };
    UploadChaptersComponent.prototype.readUrl = function (event) {
        var _a;
        var file = (_a = this.ProjectChapterForm.get('ChapterFile')) === null || _a === void 0 ? void 0 : _a.value.split('.');
        if (file[file.length - 1] === 'pdf') {
            this.src = 'assets/fileIcon/pdf.jpeg';
        }
        else if (file[file.length - 1] === 'doc' || 'docx') {
            this.src = 'assets/fileIcon/doc.jpeg';
        }
    };
    UploadChaptersComponent.prototype.publish = function () {
        var _this = this;
        this.loading = true;
        return this.http.post(this.ApiUrl, JSON.stringify(this.ProjectChapterForm.value)).subscribe({
            next: function (data) {
                _this.loading = false;
                console.log(data);
                _this.route.navigate(['']);
            },
            error: function (error) {
                _this.loading = false;
                console.log(error.message);
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
