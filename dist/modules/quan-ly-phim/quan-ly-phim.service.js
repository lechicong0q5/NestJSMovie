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
exports.QuanLyPhimService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let QuanLyPhimService = class QuanLyPhimService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getListBanner(req, query) {
        console.log({ user: req.user });
        const ListBanner = await this.prisma.banner.findMany();
        return {
            items: ListBanner || [],
        };
    }
    async getListMovie(req, query) {
        console.log({ user: req.user });
        const ListVe = await this.prisma.phim.findMany();
        return {
            items: ListVe || [],
        };
    }
    async getMoviePage(req, query) {
        console.log({ user: req.user });
        let { page, pageSize, type_id, search } = query;
        page = +page > 0 ? +page : 1;
        pageSize = +pageSize > 0 ? +pageSize : 10;
        type_id = +type_id > 0 ? +type_id : 0;
        search = search || ``;
        console.log({ page, pageSize, type_id, search });
        const whereTypeId = type_id === 0 ? {} : { type_id: type_id };
        const whereSearch = search.trim() === `` ? {} : { ten_phim: { contains: search } };
        const where = { ...whereTypeId, ...whereSearch };
        const skip = (page - 1) * pageSize;
        const totalItem = await this.prisma.phim.count({ where: where });
        const totalPage = Math.ceil(totalItem / pageSize);
        const videos = await this.prisma.phim.findMany({
            take: pageSize,
            skip: skip,
            orderBy: {
                ngay_khoi_chieu: `desc`,
            },
            where: where,
        });
        return {
            page,
            pageSize,
            totalPage,
            totalItem,
            items: videos || [],
        };
    }
    async getMoviesByDate(ngay) {
        const date = new Date(ngay);
        if (isNaN(date.getTime())) {
            throw new Error('Ngày không hợp lệ! Định dạng phải là YYYY-MM-DD');
        }
        const movies = await this.prisma.phim.findMany({
            where: {
                ngay_khoi_chieu: {
                    gte: new Date(date.setHours(0, 0, 0, 0)),
                    lt: new Date(date.setHours(23, 59, 59, 999)),
                },
            },
            orderBy: {
                ngay_khoi_chieu: 'asc',
            },
        });
        return {
            ngay,
            total: movies.length,
            items: movies,
        };
    }
    async ImageLocal(file) {
        console.log({ file });
        return `avatarLocal`;
    }
    async capNhatPhimUpload(ma_phim, file) {
        if (!file) {
            throw new Error('Vui lòng tải lên một hình ảnh hợp lệ!');
        }
        const phim = await this.prisma.phim.findUnique({ where: { ma_phim: Number(ma_phim) } });
        if (!phim) {
            throw new Error('Phim không tồn tại');
        }
        const hinhAnhMoi = `http://localhost:3000/uploads/${file.filename}`;
        const phimDaCapNhat = await this.prisma.phim.update({
            where: { ma_phim: Number(ma_phim) },
            data: { hinh_anh: hinhAnhMoi },
        });
        return {
            message: 'Cập nhật phim thành công!',
            data: phimDaCapNhat,
        };
    }
    async themPhimUploadVideo(createPhimDto, file) {
        if (!file) {
            throw new Error('Vui lòng tải lên một video hợp lệ!');
        }
        const videoPath = `http://localhost:3000/uploads/${file.filename}`;
        const phimMoi = await this.prisma.phim.create({
            data: {
                ten_phim: createPhimDto.ten_phim,
                trailer: videoPath,
            },
        });
        return {
            message: 'Thêm phim mới thành công!',
            data: phimMoi,
        };
    }
    async xoaPhim(id) {
        const phim = await this.prisma.phim.findUnique({
            where: { ma_phim: id },
        });
        if (!phim) {
            throw new common_1.NotFoundException(`Không tìm thấy phim với ID ${id}`);
        }
        await this.prisma.phim.delete({
            where: { ma_phim: id },
        });
        return { message: 'Xóa phim thành công!', phim };
    }
    async getListMovieInfor(req, query) {
        console.log({ user: req.user });
        const ListBanner = await this.prisma.phim.findMany();
        return {
            items: ListBanner || [],
        };
    }
};
exports.QuanLyPhimService = QuanLyPhimService;
exports.QuanLyPhimService = QuanLyPhimService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuanLyPhimService);
//# sourceMappingURL=quan-ly-phim.service.js.map