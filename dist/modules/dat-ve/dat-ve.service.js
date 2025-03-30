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
exports.DatVeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DatVeService = class DatVeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDatVeDto) {
        const DatVeNew = await this.prisma.dat_ve.create({
            data: {
                user_id: createDatVeDto.user_id,
                ma_lich_chieu: createDatVeDto.ma_lich_chieu,
                ma_ghe: createDatVeDto.ma_ghe
            },
        });
        return DatVeNew;
    }
    async getListDatVe(req, query) {
        console.log({ user: req.user });
        const ListVe = await this.prisma.dat_ve.findMany();
        return {
            items: ListVe || [],
        };
    }
    async createLichChieu(createLichChieuDto) {
        const { ma_rap, ma_phim, gia_ve } = createLichChieuDto;
        const DatVeNew = await this.prisma.lich_chieu.create({
            data: {
                ma_rap: ma_rap,
                ma_phim: ma_phim,
                gia_ve: gia_ve
            },
        });
        return DatVeNew;
    }
};
exports.DatVeService = DatVeService;
exports.DatVeService = DatVeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DatVeService);
//# sourceMappingURL=dat-ve.service.js.map