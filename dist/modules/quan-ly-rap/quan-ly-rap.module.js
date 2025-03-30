"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuanLyRapModule = void 0;
const common_1 = require("@nestjs/common");
const quan_ly_rap_service_1 = require("./quan-ly-rap.service");
const quan_ly_rap_controller_1 = require("./quan-ly-rap.controller");
let QuanLyRapModule = class QuanLyRapModule {
};
exports.QuanLyRapModule = QuanLyRapModule;
exports.QuanLyRapModule = QuanLyRapModule = __decorate([
    (0, common_1.Module)({
        controllers: [quan_ly_rap_controller_1.QuanLyRapController],
        providers: [quan_ly_rap_service_1.QuanLyRapService],
    })
], QuanLyRapModule);
//# sourceMappingURL=quan-ly-rap.module.js.map