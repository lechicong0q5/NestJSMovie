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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuanLyRapController = void 0;
const common_1 = require("@nestjs/common");
const quan_ly_rap_service_1 = require("./quan-ly-rap.service");
const swagger_1 = require("@nestjs/swagger");
const api_header_token_guard_1 = require("../auth/test/api-header-token.guard");
let QuanLyRapController = class QuanLyRapController {
    constructor(quanLyRapService) {
        this.quanLyRapService = quanLyRapService;
    }
    async getLayThongTinHeThong(maHeThongRap) {
        return await this.quanLyRapService.getLayThongTinHeThong(Number(maHeThongRap));
    }
    async getLayThongTinCumRapTheoHeThong(maHeThongRap) {
        return await this.quanLyRapService.getLayThongTinCumRapTheoHeThong(Number(maHeThongRap));
    }
    async getLichChieuHeThongRap(maRap) {
        return await this.quanLyRapService.getLichChieuHeThongRap(Number(maRap));
    }
    async getLichChieuPhim(maPhim) {
        return await this.quanLyRapService.getLichChieuPhim(Number(maPhim));
    }
};
exports.QuanLyRapController = QuanLyRapController;
__decorate([
    (0, common_1.Get)('LayThongTinHeThong/:ma_he_thong_rap'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    (0, swagger_1.ApiParam)({ name: 'ma_he_thong_rap', description: 'Mã hệ thống rạp', type: Number }),
    __param(0, (0, common_1.Param)('ma_he_thong_rap')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuanLyRapController.prototype, "getLayThongTinHeThong", null);
__decorate([
    (0, common_1.Get)('LayThongTinCumRapTheoHeThong/:ma_he_thong_rap'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    (0, swagger_1.ApiParam)({ name: 'ma_he_thong_rap', description: 'Mã hệ thống rạp', type: Number }),
    __param(0, (0, common_1.Param)('ma_he_thong_rap')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuanLyRapController.prototype, "getLayThongTinCumRapTheoHeThong", null);
__decorate([
    (0, common_1.Get)('LayThongTinLichChieuHeThongRap/:ma_rap'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    (0, swagger_1.ApiParam)({ name: 'ma_rap', description: 'Mã rạp', type: Number }),
    __param(0, (0, common_1.Param)('ma_rap')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuanLyRapController.prototype, "getLichChieuHeThongRap", null);
__decorate([
    (0, common_1.Get)('LayThongTinLichChieuPhim/:ma_phim'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    (0, swagger_1.ApiParam)({ name: 'ma_phim', description: 'Mã phim', type: Number }),
    __param(0, (0, common_1.Param)('ma_phim')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuanLyRapController.prototype, "getLichChieuPhim", null);
exports.QuanLyRapController = QuanLyRapController = __decorate([
    (0, common_1.Controller)('quan-ly-rap'),
    __metadata("design:paramtypes", [quan_ly_rap_service_1.QuanLyRapService])
], QuanLyRapController);
//# sourceMappingURL=quan-ly-rap.controller.js.map