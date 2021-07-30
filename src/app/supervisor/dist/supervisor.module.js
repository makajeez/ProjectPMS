"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SupervisorModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var make_appointment_component_1 = require("./make-appointment/make-appointment.component");
var upload_project_topics_component_1 = require("./upload-project-topics/upload-project-topics.component");
var supervisor_component_1 = require("./supervisor.component");
var forms_1 = require("@angular/forms");
var material_module_1 = require("../material/material.module");
var review_submissions_component_1 = require("./review-submissions/review-submissions.component");
var student_list_component_1 = require("./student-list/student-list.component");
var upload_completed_project_component_1 = require("./upload-completed-project/upload-completed-project.component");
var SupervisorModule = /** @class */ (function () {
    function SupervisorModule() {
    }
    SupervisorModule = __decorate([
        core_1.NgModule({
            declarations: [
                make_appointment_component_1.MakeAppointmentComponent,
                upload_project_topics_component_1.UploadProjectTopicsComponent,
                supervisor_component_1.SupervisorComponent,
                review_submissions_component_1.ReviewSubmissionsComponent,
                student_list_component_1.StudentListComponent,
                upload_completed_project_component_1.UploadCompletedProjectComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                material_module_1.MaterialModule,
                router_1.RouterModule.forChild([
                    { path: 'supervisor', component: supervisor_component_1.SupervisorComponent },
                    { path: 'review', component: review_submissions_component_1.ReviewSubmissionsComponent },
                    { path: 'make_appointment', component: make_appointment_component_1.MakeAppointmentComponent },
                    { path: 'upload_topics', component: upload_project_topics_component_1.UploadProjectTopicsComponent },
                    { path: 'student_list', component: student_list_component_1.StudentListComponent },
                    { path: 'submit_project_work', component: upload_completed_project_component_1.UploadCompletedProjectComponent }
                ])
            ]
        })
    ], SupervisorModule);
    return SupervisorModule;
}());
exports.SupervisorModule = SupervisorModule;
