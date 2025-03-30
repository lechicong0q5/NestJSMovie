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
}
