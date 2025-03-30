import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
export declare const responseSuccess: (metaData?: null, message?: string, code?: number) => {
    status: string;
    code: number;
    message: string;
    metaData: null;
    doc: string;
};
export declare class ResponseSuccessInterceptor implements NestInterceptor {
    reflector: Reflector;
    constructor(reflector: Reflector);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
