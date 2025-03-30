import { DatVeService } from './dat-ve.service';
import { CreateDatVeDto } from './dto/create-dat-ve.dto';
import { CreateLichChieuDto } from './dto/create-lich-chieu.dto';
export declare class DatVeController {
    private readonly datVeService;
    constructor(datVeService: DatVeService);
    create(createDatVeDto: CreateDatVeDto): Promise<{
        user_id: number;
        ma_lich_chieu: number;
        ma_ghe: number;
    }>;
    getListDatVe(query: any, req: Request): Promise<{
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
