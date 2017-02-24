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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var HttpServices = (function () {
    function HttpServices(_http) {
        this._http = _http;
    }
    HttpServices.prototype.getHttpService = function (url, options) {
        return this._http.get(url, options)
            .map(function (res) {
            console.log(res.json()['data']);
            return res.json()['data'];
        });
    };
    HttpServices.prototype.postHttpService = function (url, body, options) {
        return this._http.post(url, body, options)
            .map(function (res) { return res.json()['data']; });
    };
    HttpServices.prototype.putHttpService = function (url, body, options) {
        return this._http.put(url, body, options)
            .map(function (res) { return res.json()['data']; });
    };
    HttpServices.prototype.deleteHttpService = function (url, options) {
        return this._http.delete(url, options)
            .map(function (res) { return res.json()['data']; });
    };
    HttpServices.prototype.handleError = function (res) {
        console.log(res.json());
    };
    HttpServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpServices);
    return HttpServices;
}());
exports.HttpServices = HttpServices;
//# sourceMappingURL=HttpServices.js.map