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
exports.DatVeController = void 0;
const common_1 = require("@nestjs/common");
const dat_ve_service_1 = require("./dat-ve.service");
const create_dat_ve_dto_1 = require("./dto/create-dat-ve.dto");
const create_lich_chieu_dto_1 = require("./dto/create-lich-chieu.dto");
const swagger_1 = require("@nestjs/swagger");
const skip_permission_decorator_1 = require("../../common/decorators/skip-permission.decorator");
let DatVeController = class DatVeController {
    constructor(datVeService) {
        this.datVeService = datVeService;
    }
    async create(createDatVeDto) {
        return await this.datVeService.create(createDatVeDto);
    }
    async getListDatVe(query, req) {
        const result = await this.datVeService.getListDatVe(req, query);
        return result;
    }
    async createLichChieu(createLichChieuDto) {
        return await this.datVeService.createLichChieu(createLichChieuDto);
    }
};
exports.DatVeController = DatVeController;
__decorate([
    (0, common_1.Post)(`Datve`),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dat_ve_dto_1.CreateDatVeDto]),
    __metadata("design:returntype", Promise)
], DatVeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(`LayDanhSachPhongVe`),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Request]),
    __metadata("design:returntype", Promise)
], DatVeController.prototype, "getListDatVe", null);
__decorate([
    (0, common_1.Post)(`TaoLichChieu`),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lich_chieu_dto_1.CreateLichChieuDto]),
    __metadata("design:returntype", Promise)
], DatVeController.prototype, "createLichChieu", null);
exports.DatVeController = DatVeController = __decorate([
    (0, skip_permission_decorator_1.SkipPermission)(),
    (0, swagger_1.ApiTags)("QuanLyDatVe"),
    (0, common_1.Controller)('QuanLyDatVe'),
    __metadata("design:paramtypes", [dat_ve_service_1.DatVeService])
], DatVeController);
//# sourceMappingURL=dat-ve.controller.js.map