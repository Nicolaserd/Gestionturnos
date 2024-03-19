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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credential = void 0;
var typeorm_1 = require("typeorm");
var Users_1 = require("./Users");
var Credential = (function () {
    function Credential() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Credential.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", unique: true }),
        __metadata("design:type", String)
    ], Credential.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", unique: true }),
        __metadata("design:type", String)
    ], Credential.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Users_1.User; }, function (user) { return user.credential; }),
        __metadata("design:type", Users_1.User)
    ], Credential.prototype, "user", void 0);
    Credential = __decorate([
        (0, typeorm_1.Entity)({ name: "credentials" })
    ], Credential);
    return Credential;
}());
exports.Credential = Credential;
