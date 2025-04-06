import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class NguoiDungService {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    getListTypeUser(req: any, query: any): Promise<{
        items: {
            role_id: number;
            created_at: Date | null;
            updated_at: Date | null;
            name: string;
            description: string | null;
            is_active: boolean | null;
        }[];
    }>;
    getListUser(req: any, query: any): Promise<{
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
    getUserPage(req: any, query: any): Promise<{
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
    FindUserDetail(id: string, req: any): Promise<{
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
    FindUserDetailPage(id: string, query: any, req: any): Promise<{
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
    createUser(createNguoiDungDto: CreateNguoiDungDto, req: any): Promise<{
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
    updateUser(updateNguoiDungDto: UpdateNguoiDungDto, req: any): Promise<{
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
    deleteUser(userId: number): Promise<{
        message: string;
    }>;
}
