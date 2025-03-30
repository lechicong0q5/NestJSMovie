"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuanLyPhimModule = void 0;
const common_1 = require("@nestjs/common");
const quan_ly_phim_service_1 = require("./quan-ly-phim.service");
const quan_ly_phim_controller_1 = require("./quan-ly-phim.controller");
let QuanLyPhimModule = class QuanLyPhimModule {
};
exports.QuanLyPhimModule = QuanLyPhimModule;
exports.QuanLyPhimModule = QuanLyPhimModule = __decorate([
    (0, common_1.Module)({
        controllers: [quan_ly_phim_controller_1.QuanLyPhimController],
        providers: [quan_ly_phim_service_1.QuanLyPhimService],
    })
], QuanLyPhimModule);
//# sourceMappingURL=quan-ly-phim.module.js.map