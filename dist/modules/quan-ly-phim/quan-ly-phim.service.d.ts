import { PrismaService } from '../prisma/prisma.service';
import { CreatePhimDto } from './dto/create-phim.dto';
export declare class QuanLyPhimService {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    getListBanner(req: any, query: any): Promise<{
        items: {
            ma_banner: number;
            ma_phim: number;
            hinh_anh: string | null;
        }[];
    }>;
    getListMovie(req: any, ten_phim: string): Promise<{
        items: {
            ma_phim: number;
            hinh_anh: string | null;
            ten_phim: string;
            trailer: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        }[];
    }>;
    getMoviePage(req: any, query: any): Promise<{
        page: any;
        pageSize: any;
        totalPage: number;
        totalItem: number;
        items: {
            ma_phim: number;
            hinh_anh: string | null;
            ten_phim: string;
            trailer: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        }[];
    }>;
    getMoviesByDate(ngay: string): Promise<{
        ngay: string;
        total: number;
        items: {
            ma_phim: number;
            hinh_anh: string | null;
            ten_phim: string;
            trailer: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        }[];
    }>;
    ImageLocal(file: any): Promise<string>;
    capNhatPhimUpload(ma_phim: number, file: Express.Multer.File): Promise<{
        message: string;
        data: {
            ma_phim: number;
            hinh_anh: string | null;
            ten_phim: string;
            trailer: string | null;
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
            hinh_anh: string | null;
            ten_phim: string;
            trailer: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        };
    }>;
    xoaPhim(id: number): Promise<{
        message: string;
        phim: {
            ma_phim: number;
            hinh_anh: string | null;
            ten_phim: string;
            trailer: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        };
    }>;
    getListMovieInfor(req: any, query: any): Promise<{
        items: {
            ma_phim: number;
            hinh_anh: string | null;
            ten_phim: string;
            trailer: string | null;
            mo_ta: string | null;
            ngay_khoi_chieu: Date | null;
            danh_gia: number | null;
            hot: boolean | null;
            dang_chieu: boolean | null;
            sap_chieu: boolean | null;
        }[];
    }>;
}
