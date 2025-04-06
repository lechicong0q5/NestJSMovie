import { QuanLyPhimService } from './quan-ly-phim.service';
import { CreatePhimDto } from './dto/create-phim.dto';
import { Request } from 'express';
export declare class QuanLyPhimController {
    private readonly quanLyPhimService;
    constructor(quanLyPhimService: QuanLyPhimService);
    getListDatVe(query: any, req: Request): Promise<{
        items: {
            ma_phim: number;
            hinh_anh: string | null;
            ma_banner: number;
        }[];
    }>;
    getListPhim(query: any, req: Request): Promise<{
        items: {
            ma_phim: number;
            ten_phim: string;
            trailer: string | null;
            hinh_anh: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        }[];
    }>;
    getListVideo(query: any, page: string, pageSize: string, req: Request): Promise<{
        page: any;
        pageSize: any;
        totalPage: number;
        totalItem: number;
        items: {
            ma_phim: number;
            ten_phim: string;
            trailer: string | null;
            hinh_anh: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        }[];
    }>;
    getMoviesByDate(ngay: string, req: Request): Promise<{
        ngay: string;
        total: number;
        items: {
            ma_phim: number;
            ten_phim: string;
            trailer: string | null;
            hinh_anh: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        }[];
    }>;
    avatarLocal(file: Express.Multer.File): Promise<string>;
    capNhatPhimUpload(ma_phim: number, file: Express.Multer.File): Promise<{
        message: string;
        data: {
            ma_phim: number;
            ten_phim: string;
            trailer: string | null;
            hinh_anh: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        };
    }>;
    themPhimUploadVideo(createPhimDto: CreatePhimDto, file: Express.Multer.File): Promise<{
        message: string;
        data: {
            ma_phim: number;
            ten_phim: string;
            trailer: string | null;
            hinh_anh: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        };
    }>;
    xoaPhim(id: string): Promise<{
        message: string;
        phim: {
            ma_phim: number;
            ten_phim: string;
            trailer: string | null;
            hinh_anh: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        };
    }>;
    getListMovieInfor(query: any, req: Request): Promise<{
        items: {
            ma_phim: number;
            ten_phim: string;
            trailer: string | null;
            hinh_anh: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        }[];
    }>;
}
