"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var upload_project_topic_component_1 = require("./upload-project-topic/upload-project-topic.component");
var upload_chapters_component_1 = require("./upload-chapters/upload-chapters.component");
var request_appointment_component_1 = require("./request-appointment/request-appointment.component");
var view_chapter_status_component_1 = require("./view-chapter-status/view-chapter-status.component");
var material_module_1 = require("../material/material.module");
var forms_1 = require("@angular/forms");
var StudentModule = /** @class */ (function () {
    function StudentModule() {
    }
    StudentModule = __decorate([
        core_1.NgModule({
            declarations: [
                upload_project_topic_component_1.UploadProjectTopicComponent,
                upload_chapters_component_1.UploadChaptersComponent,
                request_appointment_component_1.RequestAppointmentComponent,
                view_chapter_status_component_1.ViewChapterStatusComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                material_module_1.MaterialModule,
                router_1.RouterModule.forChild([
                    { path: 'upload_project', component: upload_project_topic_component_1.UploadProjectTopicComponent },
                    { path: 'upload_chapter', component: upload_chapters_component_1.UploadChaptersComponent },
                    { path: 'request_appointment', component: request_appointment_component_1.RequestAppointmentComponent },
                    { path: 'view_status', component: view_chapter_status_component_1.ViewChapterStatusComponent }
                ])
            ],
            exports: [
                upload_project_topic_component_1.UploadProjectTopicComponent,
                upload_chapters_component_1.UploadChaptersComponent,
                request_appointment_component_1.RequestAppointmentComponent,
                view_chapter_status_component_1.ViewChapterStatusComponent
            ]
        })
    ], StudentModule);
    return StudentModule;
}());
exports.StudentModule = StudentModule;
