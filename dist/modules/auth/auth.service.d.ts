import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    prisma: PrismaService;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    login(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    createTokens(userId: number): {
        accessToken: string;
        refreshToken: string;
    };
    register(req: any): Promise<{
        email: string;
        user_id: number;
        full_name: string;
        avatar: string | null;
        google_id: string | null;
        face_app_id: string | null;
        role_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
}
