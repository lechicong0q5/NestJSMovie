import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    register(createUserDto: CreateUserDto): Promise<{
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
