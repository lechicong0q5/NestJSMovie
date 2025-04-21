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
exports.QuanLyPhimController = void 0;
const common_1 = require("@nestjs/common");
const quan_ly_phim_service_1 = require("./quan-ly-phim.service");
const swagger_1 = require("@nestjs/swagger");
const skip_permission_decorator_1 = require("../../common/decorators/skip-permission.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const local_multer_1 = require("../../common/multer/local.multer");
const file_upload_dto_1 = require("./dto/file-upload.dto");
const create_phim_dto_1 = require("./dto/create-phim.dto");
const api_header_token_guard_1 = require("../auth/test/api-header-token.guard");
let QuanLyPhimController = class QuanLyPhimController {
    constructor(quanLyPhimService) {
        this.quanLyPhimService = quanLyPhimService;
    }
    async getListDatVe(query, req) {
        const result = await this.quanLyPhimService.getListBanner(req, query);
        return result;
    }
    async getListPhim(ten_phim, req) {
        const result = await this.quanLyPhimService.getListMovie(req, ten_phim);
        return result;
    }
    async getListVideo(query, page, pageSize, req) {
        const result = await this.quanLyPhimService.getMoviePage(req, query);
        return result;
    }
    async getMoviesByDate(ngay, req) {
        const result = await this.quanLyPhimService.getMoviesByDate(ngay);
        return result;
    }
    async avatarLocal(file) {
        return await this.quanLyPhimService.ImageLocal(file);
    }
    async capNhatPhimUpload(ma_phim, file) {
        return await this.quanLyPhimService.capNhatPhimUpload(ma_phim, file);
    }
    async themPhimUploadVideo(createPhimDto, file) {
        return await this.quanLyPhimService.themPhimUploadVideo(createPhimDto, file);
    }
    async xoaPhim(id) {
        return await this.quanLyPhimService.xoaPhim(Number(id));
    }
    async getListMovieInfor(query, req) {
        const result = await this.quanLyPhimService.getListMovieInfor(req, query);
        return result;
    }
};
exports.QuanLyPhimController = QuanLyPhimController;
__decorate([
    (0, common_1.Get)('LayDanhSachBanner'),
    (0, swagger_1.ApiHeader)({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true }),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], QuanLyPhimController.prototype, "getListDatVe", null);
__decorate([
    (0, common_1.Get)('LayDanhSachPhim'),
    (0, swagger_1.ApiHeader)({
        name: 'api-header-token',
        description: 'Nhập token trực tiếp vào header: api-header-token',
        required: true,
    }),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    __param(0, (0, common_1.Query)('ten_phim')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], QuanLyPhimController.prototype, "getListPhim", null);
__decorate([
    (0, common_1.Get)('LayDanhSachLoaiNguoiDungPhanTrang'),
    (0, swagger_1.ApiHeader)({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true }),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Object]),
    __metadata("design:returntype", Promise)
], QuanLyPhimController.prototype, "getListVideo", null);
__decorate([
    (0, common_1.Get)('LayDanhSachPhimTheoNgay'),
    (0, swagger_1.ApiHeader)({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true }),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    __param(0, (0, common_1.Query)('ngay')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], QuanLyPhimController.prototype, "getMoviesByDate", null);
__decorate([
    (0, common_1.Post)('ThemPhimUploadHinh'),
    (0, swagger_1.ApiHeader)({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true }),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', local_multer_1.default)),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'List of movie',
        type: file_upload_dto_1.FileUploadDto,
    }),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuanLyPhimController.prototype, "avatarLocal", null);
__decorate([
    (0, common_1.Post)('CapNhatPhimUpload/:ma_phim'),
    (0, swagger_1.ApiHeader)({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true }),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinh_anh')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Upload hình ảnh và cập nhật phim',
        schema: {
            type: 'object',
            properties: {
                hinh_anh: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    __param(0, (0, common_1.Param)('ma_phim')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], QuanLyPhimController.prototype, "capNhatPhimUpload", null);
__decorate([
    (0, common_1.Post)('ThemPhimUploadVideo'),
    (0, swagger_1.ApiHeader)({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true }),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('video_phim')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Tạo phim mới và upload video',
        schema: {
            type: 'object',
            properties: {
                ten_phim: { type: 'string' },
                video_phim: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phim_dto_1.CreatePhimDto, Object]),
    __metadata("design:returntype", Promise)
], QuanLyPhimController.prototype, "themPhimUploadVideo", null);
__decorate([
    (0, common_1.Delete)('XoaPhim/:id'),
    (0, swagger_1.ApiHeader)({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true }),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID của phim cần xóa', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuanLyPhimController.prototype, "xoaPhim", null);
__decorate([
    (0, common_1.Get)('LayDanhSachThongTinPhim'),
    (0, swagger_1.ApiHeader)({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true }),
    (0, common_1.UseGuards)(api_header_token_guard_1.ApiHeaderTokenGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], QuanLyPhimController.prototype, "getListMovieInfor", null);
exports.QuanLyPhimController = QuanLyPhimController = __decorate([
    (0, swagger_1.ApiTags)('QuanLyPhim'),
    (0, skip_permission_decorator_1.SkipPermission)(),
    (0, common_1.Controller)('QuanLyPhim'),
    __metadata("design:paramtypes", [quan_ly_phim_service_1.QuanLyPhimService])
], QuanLyPhimController);
//# sourceMappingURL=quan-ly-phim.controller.js.map