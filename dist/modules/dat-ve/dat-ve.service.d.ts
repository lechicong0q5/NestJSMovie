import { CreateDatVeDto } from './dto/create-dat-ve.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLichChieuDto } from './dto/create-lich-chieu.dto';
export declare class DatVeService {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    create(createDatVeDto: CreateDatVeDto): Promise<{
        user_id: number;
        ma_lich_chieu: number;
        ma_ghe: number;
    }>;
    getListDatVe(req: any, query: any): Promise<{
        items: {
            user_id: number;
            ma_lich_chieu: number;
            ma_ghe: number;
        }[];
    }>;
    createLichChieu(createLichChieuDto: CreateLichChieuDto): Promise<{
        ma_lich_chieu: number;
        ma_rap: number;
        ma_phim: number;
        gia_ve: number;
        ngay_gio_chieu: Date | null;
    }>;
}
