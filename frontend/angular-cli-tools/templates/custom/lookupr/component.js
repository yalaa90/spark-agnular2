"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var _name_Service_1 = require("./$name$Service");
var FormScreen_component_1 = require("../../screens/FormScreen.component");
var $PascalCaseName$Component = (function (_super) {
    __extends($PascalCaseName$Component, _super);
    function $PascalCaseName$Component(_$name$Service) {
        var _this;
        _this._$name$Service = _$name$Service;
        _this.contents = 'Lorem ipsum dolor sit amet, aptent sollicitudin, non mauris sodales rutrum, et sodales mauris. Amet vel eget porta, augue wisi, et massa vel et felis pellentesque vestibulum, mauris feugiat ligula mollis. Faucibus quam eros. Vitae sit amet mattis pulvinar vel.';
        return _this;
    }
    return $PascalCaseName$Component;
}(FormScreen_component_1.FormScreen));
$PascalCaseName$Component = __decorate([
    core_1.Component({
        selector: '$name$',
        templateUrl: '$name$.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _name_Service_1.$name$Service !== "undefined" && _name_Service_1.$name$Service) === "function" && _a || Object])
], $PascalCaseName$Component);
exports.$PascalCaseName$Component = $PascalCaseName$Component;
var _a;
//# sourceMappingURL=component.js.map