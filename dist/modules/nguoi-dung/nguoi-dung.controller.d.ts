import { NguoiDungService } from './nguoi-dung.service';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
export declare class NguoiDungController {
    private readonly nguoiDungService;
    constructor(nguoiDungService: NguoiDungService);
    getListTypeUser(query: any, req: Request): Promise<{
        items: {
            role_id: number;
            created_at: Date | null;
            updated_at: Date | null;
            name: string;
            description: string | null;
            is_active: boolean | null;
        }[];
    }>;
    getListUser(query: any, req: Request): Promise<{
        items: {
            email: string;
            pass_word: string;
            user_id: number;
            full_name: string;
            avatar: string | null;
            google_id: string | null;
            face_app_id: string | null;
            role_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
        }[];
    }>;
    getListVideo(query: any, page: string, pageSize: string, req: Request): Promise<{
        page: any;
        pageSize: any;
        totalPage: number;
        totalItem: number;
        items: {
            email: string;
            pass_word: string;
            user_id: number;
            full_name: string;
            avatar: string | null;
            google_id: string | null;
            face_app_id: string | null;
            role_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
        }[];
    }>;
    FindUserDetail(id: string, headers: any, req: Request): Promise<{
        email: string;
        pass_word: string;
        user_id: number;
        full_name: string;
        avatar: string | null;
        google_id: string | null;
        face_app_id: string | null;
        role_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    } | null>;
    FindUserDetailPage(query: any, id: string, req: Request): Promise<{
        page: any;
        pageSize: any;
        totalPage: number;
        totalItem: number;
        items: {
            email: string;
            pass_word: string;
            user_id: number;
            full_name: string;
            avatar: string | null;
            google_id: string | null;
            face_app_id: string | null;
            role_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
        }[];
    }>;
    createUser(createNguoiDungDto: CreateNguoiDungDto, req: Request): Promise<{
        message: string;
        user: {
            email: string;
            pass_word: string;
            user_id: number;
            full_name: string;
            avatar: string | null;
            google_id: string | null;
            face_app_id: string | null;
            role_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
        };
    }>;
    updateUser(updateNguoiDungDto: UpdateNguoiDungDto, req: Request): Promise<{
        message: string;
        user: {
            email: string;
            pass_word: string;
            user_id: number;
            full_name: string;
            avatar: string | null;
            google_id: string | null;
            face_app_id: string | null;
            role_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
        };
    }>;
    deleteUser(id: string, req: Request): Promise<{
        message: string;
    }>;
}
