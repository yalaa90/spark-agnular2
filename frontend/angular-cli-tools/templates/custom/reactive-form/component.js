"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var $PascalCaseName$Component = (function () {
    function $PascalCaseName$Component(formBuilder) {
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            'email': ['', [forms_1.Validators.required, forms_1.Validators.pattern(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)]],
        });
    }
    $PascalCaseName$Component.prototype.ngOnInit = function () {
    };
    $PascalCaseName$Component.prototype.isValidInput = function (input) {
        return input.valid || input.pristine;
    };
    /* event provided in cases where event.preventDefault(); or event.stopPropagation(); is required */
    $PascalCaseName$Component.prototype.submitForm = function (event) {
        console.log(event);
        console.log(this.form.value);
    };
    $PascalCaseName$Component.prototype.ngOnDestroy = function () {
    };
    return $PascalCaseName$Component;
}());
$PascalCaseName$Component = __decorate([
    core_1.Component({
        selector: '$name$',
        templateUrl: '$name$.component.html',
        styleUrls: ['$name$.component.scss'],
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], $PascalCaseName$Component);
exports.$PascalCaseName$Component = $PascalCaseName$Component;
//# sourceMappingURL=component.js.map