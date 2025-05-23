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
exports.NguoiDungController = void 0;
const common_1 = require("@nestjs/common");
const nguoi_dung_service_1 = require("./nguoi-dung.service");
const create_nguoi_dung_dto_1 = require("./dto/create-nguoi-dung.dto");
const update_nguoi_dung_dto_1 = require("./dto/update-nguoi-dung.dto");
const swagger_1 = require("@nestjs/swagger");
const api_header_token_guard_1 = require("../auth/test/api-header-token.guard");
let NguoiDungController = class NguoiDungController {
    constructor(nguoiDungService) {
        this.nguoiDungService = nguoiDungService;
    }
    async getListTypeUser(query, req) {
        return await this.nguoiDungService.getListTypeUser(req, query);
    }
    async getListUser(tu_khoa, req) {
        return await this.nguoiDungService.getListUser(req, tu_khoa);
    }
    async getListVideo(query, page, pageSize, req) {
        return await this.nguoiDungService.getUserPage(req, query);
    }
    async FindUserDetail(id, headers, req) {
        console.log({ headers });
        return await this.nguoiDungService.FindUserDetail(id, req);
    }
    async FindUserDetailPage(query, id, req) {
        console.log({ headers: req.headers });
        return await this.nguoiDungService.FindUserDetailPage(id, query, req);
    }
    async createUser(createNguoiDungDto, req) {
        return await this.nguoiDungService.createUser(createNguoiDungDto, req);
    }
    async updateUser(updateNguoiDungDto, req) {
        return await this.nguoiDungService.updateUser(updateNguoiDungDto, req);
    }
    async deleteUser(id, req) {
        return await this.nguoiDungService.deleteUser(Number(id));
    }
};
exports.NguoiDungController = NguoiDungController;
__decorate([
    (0, common_1.Get)('LayDanhSachLoaiNguoiDung'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Request]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "getListTypeUser", null);
__decorate([
    (0, common_1.Get)('LayDanhSachNguoiDung'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    __param(0, (0, common_1.Query)('tu_khoa')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Request]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "getListUser", null);
__decorate([
    (0, common_1.Get)('LayDanhSachLoaiNguoiDungPhanTrang'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Request]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "getListVideo", null);
__decorate([
    (0, common_1.Get)('TimKiemNguoiDung/:id'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Request]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "FindUserDetail", null);
__decorate([
    (0, common_1.Get)('TimKiemNguoiDungPhanTrang'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('id')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Request]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "FindUserDetailPage", null);
__decorate([
    (0, common_1.Post)('TaoNguoiDung'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nguoi_dung_dto_1.CreateNguoiDungDto, Request]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)('CapNhatThongTinNguoiDung'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_nguoi_dung_dto_1.UpdateNguoiDungDto, Request]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('XoaNguoiDung/:id'),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Request]),
    __metadata("design:returntype", Promise)
], NguoiDungController.prototype, "deleteUser", null);
exports.NguoiDungController = NguoiDungController = __decorate([
    (0, swagger_1.ApiTags)('QuanLyNguoiDung'),
    (0, common_1.Controller)('QuanLyNguoiDung'),
    __metadata("design:paramtypes", [nguoi_dung_service_1.NguoiDungService])
], NguoiDungController);
//# sourceMappingURL=nguoi-dung.controller.js.map