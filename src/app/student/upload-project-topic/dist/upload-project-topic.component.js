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
    function UploadProjectTopicComponent(fb) {
        this.fb = fb;
        this.src = '';
    }
    UploadProjectTopicComponent.prototype.ngOnInit = function () {
        this.proposalForm = this.fb.group({
            Topic: ['', forms_1.Validators.required],
            Abstract: '' // this.url
        });
    };
    //   readUrl(event: any): void {
    //     if (event.target.files && event.target.files[0]) {
    //       const reader = new FileReader();
    //       reader.onload = (event: ProgressEvent) => {
    //         this.url = (<FileReader>event.target).result;
    //       }
    //       reader.readAsDataURL(event.target.files[0]);
    //     }
    //   }
    UploadProjectTopicComponent.prototype.readUrl = function (event) {
        var _a;
        var file = (_a = this.proposalForm.get('Abstract')) === null || _a === void 0 ? void 0 : _a.value.split('.');
        if (file[file.length - 1] === 'pdf') {
            this.src = 'assets/fileIcon/pdf.jpeg';
        }
        else if (file[file.length - 1] === 'doc' || 'docx') {
            this.src = 'assets/fileIcon/doc.jpeg';
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
