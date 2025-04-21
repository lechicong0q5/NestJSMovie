import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class NguoiDungService {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    getListTypeUser(req: any, query: any): Promise<{
        items: {
            role_id: number;
            name: string;
            description: string | null;
            is_active: boolean | null;
            created_at: Date | null;
            updated_at: Date | null;
        }[];
    }>;
    getListUser(req: any, tu_khoa: string): Promise<{
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
    getUserPage(req: any, query: any): Promise<{
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
    FindUserDetail(id: string, req: any): Promise<{
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
    FindUserDetailPage(id: string, query: any, req: any): Promise<{
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
    createUser(createNguoiDungDto: CreateNguoiDungDto, req: any): Promise<{
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
    updateUser(updateNguoiDungDto: UpdateNguoiDungDto, req: any): Promise<{
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
    deleteUser(userId: number): Promise<{
        message: string;
    }>;
}
