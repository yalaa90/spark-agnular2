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
var common_1 = require("@angular/common");
var _name__routing_1 = require("./$name$.routing");
var _name__component_1 = require("./$name$.component");
var $PascalCaseName$Module = (function () {
    function $PascalCaseName$Module() {
    }
    return $PascalCaseName$Module;
}());
$PascalCaseName$Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            _name__routing_1.routing
        ],
        providers: [],
        declarations: [
            _name__component_1.$PascalCaseName$Component
        ],
        exports: []
    }),
    __metadata("design:paramtypes", [])
], $PascalCaseName$Module);
exports.$PascalCaseName$Module = $PascalCaseName$Module;
//# sourceMappingURL=lazy-load-module.js.map