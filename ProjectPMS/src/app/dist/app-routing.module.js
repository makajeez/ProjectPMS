"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var completed_project_component_1 = require("./projects/completed-project/completed-project.component");
var project_topics_component_1 = require("./projects/project-topics/project-topics.component");
var forget_password_component_1 = require("./User/forget-password/forget-password.component");
var login_component_1 = require("./User/login/login.component");
var signup_component_1 = require("./User/signup/signup.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'project_topics', component: project_topics_component_1.ProjectTopicsComponent },
    { path: 'completed_project', component: completed_project_component_1.CompletedProjectComponent },
    { path: 'forget-pw', component: forget_password_component_1.ForgetPasswordComponent },
    { path: 'student', loadChildren: './student/student.module#StudentModule' },
    { path: 'supervisor', loadChildren: './supervisor/supervisor.module#SupervisorModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
