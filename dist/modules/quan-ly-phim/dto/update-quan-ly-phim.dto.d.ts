import { CreateQuanLyPhimDto } from './create-quan-ly-phim.dto';
declare const UpdateQuanLyPhimDto_base: import("@nestjs/common").Type<Partial<CreateQuanLyPhimDto>>;
export declare class UpdateQuanLyPhimDto extends UpdateQuanLyPhimDto_base {
    ten_phim?: string;
    trailer?: string;
    mo_ta?: string;
}
export {};
