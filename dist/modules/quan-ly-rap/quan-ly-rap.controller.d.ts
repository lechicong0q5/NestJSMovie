import { QuanLyRapService } from './quan-ly-rap.service';
export declare class QuanLyRapController {
    private readonly quanLyRapService;
    constructor(quanLyRapService: QuanLyRapService);
    getLayThongTinHeThong(maHeThongRap: string): Promise<{
        ma_he_thong_rap: number;
        ten_he_thong_rap: string;
        logo: string | null;
    }>;
    getLayThongTinCumRapTheoHeThong(maHeThongRap: string): Promise<{
        ma_he_thong_rap: number;
        ma_cum_rap: number;
        ten_cum_rap: string;
        dia_chi: string;
    }[]>;
    getLichChieuHeThongRap(maRap: string): Promise<{
        ma_lich_chieu: number;
        ma_rap: number;
        ma_phim: number;
        gia_ve: number;
        ngay_gio_chieu: Date | null;
    }[]>;
    getLichChieuPhim(maPhim: string): Promise<{
        ma_lich_chieu: number;
        ma_rap: number;
        ma_phim: number;
        gia_ve: number;
        ngay_gio_chieu: Date | null;
    }[]>;
}
