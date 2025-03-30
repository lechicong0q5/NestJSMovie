import { Strategy } from 'passport-custom';
import { PrismaService } from 'src/modules/prisma/prisma.service';
declare const CheckPermissionStrategy_base: new () => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class CheckPermissionStrategy extends CheckPermissionStrategy_base {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    validate(req: any): Promise<boolean>;
}
export {};
