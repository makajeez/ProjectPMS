"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_module_1 = require("./app-routing.module");
var student_module_1 = require("./student/student.module");
var supervisor_module_1 = require("./supervisor/supervisor.module");
var material_module_1 = require("./material/material.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./User/login/login.component");
var signup_component_1 = require("./User/signup/signup.component");
var home_component_1 = require("./home/home.component");
var project_topics_component_1 = require("./projects/project-topics/project-topics.component");
var completed_project_component_1 = require("./projects/completed-project/completed-project.component");
var service_worker_1 = require("@angular/service-worker");
var environment_1 = require("../environments/environment");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_toastr_1 = require("ngx-toastr");
var http_1 = require("@angular/common/http");
var core_2 = require("@angular/material/core");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                home_component_1.HomeComponent,
                project_topics_component_1.ProjectTopicsComponent,
                completed_project_component_1.CompletedProjectComponent
            ],
            imports: [
                supervisor_module_1.SupervisorModule,
                student_module_1.StudentModule,
                platform_browser_1.BrowserModule,
                material_module_1.MaterialModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                core_2.MatNativeDateModule,
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', {
                    enabled: environment_1.environment.production,
                    // Register the ServiceWorker as soon as the app is stable
                    // or after 30 seconds (whichever comes first).
                    registrationStrategy: 'registerWhenStable:30000'
                }),
                ng_bootstrap_1.NgbModule,
                http_1.HttpClientModule,
                ngx_toastr_1.ToastrModule.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
