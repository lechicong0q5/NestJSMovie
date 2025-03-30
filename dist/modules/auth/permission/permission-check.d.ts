import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
declare const PermissionCheck_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class PermissionCheck extends PermissionCheck_base {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
