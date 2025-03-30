import { PrismaService } from '../prisma/prisma.service';
export declare class QuanLyRapService {
    private prisma;
    constructor(prisma: PrismaService);
    getLayThongTinHeThong(maHeThongRap: number): Promise<{
        ma_he_thong_rap: number;
        ten_he_thong_rap: string;
        logo: string | null;
    }>;
    getLayThongTinCumRapTheoHeThong(maHeThongRap: number): Promise<{
        ma_he_thong_rap: number;
        ma_cum_rap: number;
        ten_cum_rap: string;
        dia_chi: string;
    }[]>;
    getLichChieuHeThongRap(maRap: number): Promise<{
        ma_lich_chieu: number;
        ma_rap: number;
        ma_phim: number;
        gia_ve: number;
        ngay_gio_chieu: Date | null;
    }[]>;
    getLichChieuPhim(maPhim: number): Promise<{
        ma_lich_chieu: number;
        ma_rap: number;
        ma_phim: number;
        gia_ve: number;
        ngay_gio_chieu: Date | null;
    }[]>;
}
