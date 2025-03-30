import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/modules/prisma/prisma.service';
declare const CheckTokenStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class CheckTokenStrategy extends CheckTokenStrategy_base {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    validate(payload: any): Promise<{
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
}
export {};
