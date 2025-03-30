import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
declare const TokenCheck_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class TokenCheck extends TokenCheck_base {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
