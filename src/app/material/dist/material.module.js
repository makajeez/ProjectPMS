"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
/** Angular Imports */
var core_1 = require("@angular/core");
var input_1 = require("@angular/material/input");
var autocomplete_1 = require("@angular/material/autocomplete");
var badge_1 = require("@angular/material/badge");
var button_1 = require("@angular/material/button");
var datepicker_1 = require("@angular/material/datepicker");
var slider_1 = require("@angular/material/slider");
var form_field_1 = require("@angular/material/form-field");
var select_1 = require("@angular/material/select");
var card_1 = require("@angular/material/card");
var list_1 = require("@angular/material/list");
var icon_1 = require("@angular/material/icon");
var paginator_1 = require("@angular/material/paginator");
var progress_bar_1 = require("@angular/material/progress-bar");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var sidenav_1 = require("@angular/material/sidenav");
var table_1 = require("@angular/material/table");
/**
 * Material Module
 *
 * Angular CDK, Angular Material and Flex Layout modules are exported here.
 */
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                list_1.MatListModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                progress_bar_1.MatProgressBarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                sidenav_1.MatSidenavModule,
                card_1.MatCardModule,
                // MatNativeDateModule
                datepicker_1.MatDatepickerModule,
                icon_1.MatIconModule,
                slider_1.MatSliderModule,
                form_field_1.MatFormFieldModule,
                select_1.MatSelectModule,
                input_1.MatInputModule,
                autocomplete_1.MatAutocompleteModule,
                badge_1.MatBadgeModule,
                button_1.MatButtonModule,
            ],
            providers: []
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
