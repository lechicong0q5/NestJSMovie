import { CreateNguoiDungDto } from './create-nguoi-dung.dto';
declare const UpdateNguoiDungDto_base: import("@nestjs/common").Type<Partial<CreateNguoiDungDto>>;
export declare class UpdateNguoiDungDto extends UpdateNguoiDungDto_base {
    user_id: number;
    email?: string;
    full_name?: string;
    avatar?: string;
}
export {};
