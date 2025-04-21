import { NguoiDungService } from './nguoi-dung.service';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
export declare class NguoiDungController {
    private readonly nguoiDungService;
    constructor(nguoiDungService: NguoiDungService);
    getListTypeUser(query: any, req: Request): Promise<{
        items: {
            role_id: number;
            name: string;
            description: string | null;
            is_active: boolean | null;
            created_at: Date | null;
            updated_at: Date | null;
        }[];
    }>;
    getListUser(tu_khoa: string, req: Request): Promise<{
        items: {
            role_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            user_id: number;
            email: string;
            pass_word: string;
            full_name: string;
            avatar: string | null;
            google_id: string | null;
            face_app_id: string | null;
        }[];
    }>;
    getListVideo(query: any, page: string, pageSize: string, req: Request): Promise<{
        page: any;
        pageSize: any;
        totalPage: number;
        totalItem: number;
        items: {
            role_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            user_id: number;
            email: string;
            pass_word: string;
            full_name: string;
            avatar: string | null;
            google_id: string | null;
            face_app_id: string | null;
        }[];
    }>;
    FindUserDetail(id: string, headers: any, req: Request): Promise<{
        role_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number;
        email: string;
        pass_word: string;
        full_name: string;
        avatar: string | null;
        google_id: string | null;
        face_app_id: string | null;
    } | null>;
    FindUserDetailPage(query: any, id: string, req: Request): Promise<{
        page: any;
        pageSize: any;
        totalPage: number;
        totalItem: number;
        items: {
            role_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            user_id: number;
            email: string;
            pass_word: string;
            full_name: string;
            avatar: string | null;
            google_id: string | null;
            face_app_id: string | null;
        }[];
    }>;
    createUser(createNguoiDungDto: CreateNguoiDungDto, req: Request): Promise<{
        message: string;
        user: {
            role_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            user_id: number;
            email: string;
            pass_word: string;
            full_name: string;
            avatar: string | null;
            google_id: string | null;
            face_app_id: string | null;
        };
    }>;
    updateUser(updateNguoiDungDto: UpdateNguoiDungDto, req: Request): Promise<{
        message: string;
        user: {
            role_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            user_id: number;
            email: string;
            pass_word: string;
            full_name: string;
            avatar: string | null;
            google_id: string | null;
            face_app_id: string | null;
        };
    }>;
    deleteUser(id: string, req: Request): Promise<{
        message: string;
    }>;
}
