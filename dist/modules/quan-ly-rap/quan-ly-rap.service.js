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
exports.QuanLyRapService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let QuanLyRapService = class QuanLyRapService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getLayThongTinHeThong(maHeThongRap) {
        const heThongRap = await this.prisma.he_thong_rap.findUnique({
            where: { ma_he_thong_rap: maHeThongRap },
        });
        if (!heThongRap) {
            throw new common_1.NotFoundException(`Không tìm thấy hệ thống rạp với mã: ${maHeThongRap}`);
        }
        return heThongRap;
    }
    async getLayThongTinCumRapTheoHeThong(maHeThongRap) {
        const cumRapList = await this.prisma.cum_rap.findMany({
            where: { ma_he_thong_rap: maHeThongRap },
        });
        if (cumRapList.length === 0) {
            throw new common_1.NotFoundException(`Không tìm thấy cụm rạp cho hệ thống rạp có mã: ${maHeThongRap}`);
        }
        return cumRapList;
    }
    async getLichChieuHeThongRap(maRap) {
        const lichChieuList = await this.prisma.lich_chieu.findMany({
            where: { ma_rap: maRap },
        });
        if (lichChieuList.length === 0) {
            throw new common_1.NotFoundException(`Không tìm thấy lịch chiếu cho rạp có mã: ${maRap}`);
        }
        return lichChieuList;
    }
    async getLichChieuPhim(maPhim) {
        const lichChieuList = await this.prisma.lich_chieu.findMany({
            where: { ma_phim: maPhim },
        });
        if (lichChieuList.length === 0) {
            throw new common_1.NotFoundException(`Không tìm thấy lịch chiếu cho phim có mã: ${maPhim}`);
        }
        return lichChieuList;
    }
};
exports.QuanLyRapService = QuanLyRapService;
exports.QuanLyRapService = QuanLyRapService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuanLyRapService);
//# sourceMappingURL=quan-ly-rap.service.js.map