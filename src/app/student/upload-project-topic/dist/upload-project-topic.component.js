"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UploadProjectTopicComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UploadProjectTopicComponent = /** @class */ (function () {
    function UploadProjectTopicComponent(fb, http, toastr, serve, route) {
        this.fb = fb;
        this.http = http;
        this.toastr = toastr;
        this.serve = serve;
        this.route = route;
        this.src = '';
        this.loading = false;
        this.supervisors = [
            {
                username: 'Dr. Faruk Umar Ambursa',
                id: 1
            },
            {
                username: 'Dr.Khalid',
                id: 2
            },
            {
                username: 'Mal. S M Tanimu',
                id: 3
            }
        ];
    }
    UploadProjectTopicComponent.prototype.ngOnInit = function () {
        this.proposalForm = this.fb.group({
            supervisor: ['', forms_1.Validators.required],
            proposal_title: ['', forms_1.Validators.required],
            proposal_file: '',
            student: this.serve.currentUser.username,
            status: 'Pending'
        });
    };
    UploadProjectTopicComponent.prototype.submit = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        this.loading = true;
        var formData = new FormData();
        formData.append('proposal_title', (_a = this.proposalForm.get('proposal_title')) === null || _a === void 0 ? void 0 : _a.value);
        formData.append('proposal_file', (_b = this.proposalForm.get('proposal_file')) === null || _b === void 0 ? void 0 : _b.value);
        formData.append('supervisor', (_c = this.proposalForm.get('supervisor')) === null || _c === void 0 ? void 0 : _c.value);
        formData.append('student', (_d = this.proposalForm.get('student')) === null || _d === void 0 ? void 0 : _d.value);
        formData.append('status', (_e = this.proposalForm.get('status')) === null || _e === void 0 ? void 0 : _e.value);
        return this.http.post(this.serve.api + "/proposal/", formData).subscribe({
            next: function (data) {
                _this.loading = false;
                _this.toastr.success("Proposal Uploaded Successfully", 'Success', { timeOut: 2000 });
                _this.route.navigate(['/']);
            },
            error: function (error) {
                _this.loading = false;
                _this.toastr.error("Proposal Upload Failed \n\n        That's All we know", 'Error', { timeOut: 2000 });
            }
        });
    };
    UploadProjectTopicComponent.prototype.readUrl = function (event) {
        var _a, _b;
        var file = (_a = this.proposalForm.get('proposal_file')) === null || _a === void 0 ? void 0 : _a.value.split('.');
        if (file[file.length - 1] === 'pdf') {
            this.src = 'assets/fileIcon/pdf.jpeg';
        }
        else if (file[file.length - 1] === 'doc' || 'docx') {
            this.src = 'assets/fileIcon/doc.jpeg';
        }
        if (event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            (_b = this.proposalForm.get('proposal_file')) === null || _b === void 0 ? void 0 : _b.setValue(file_1);
        }
    };
    UploadProjectTopicComponent = __decorate([
        core_1.Component({
            selector: 'app-upload-project-topic',
            templateUrl: './upload-project-topic.component.html',
            styleUrls: ['./upload-project-topic.component.css']
        })
    ], UploadProjectTopicComponent);
    return UploadProjectTopicComponent;
}());
exports.UploadProjectTopicComponent = UploadProjectTopicComponent;
