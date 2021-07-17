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
var UploadProjectTopicComponent = /** @class */ (function () {
    function UploadProjectTopicComponent(fb) {
        this.fb = fb;
    }
    UploadProjectTopicComponent.prototype.ngOnInit = function () {
        this.proposalForm = this.fb.group({
            topic: this.buildTopic()
        });
    };
    UploadProjectTopicComponent.prototype.buildTopic = function () {
        return this.fb.group({
            topic: ''
        });
    };
    UploadProjectTopicComponent.prototype.getExt = function () {
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
