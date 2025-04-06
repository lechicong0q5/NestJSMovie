"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiHeaderTokenGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const is_public_decorator_1 = require("../../../common/decorators/is-public.decorator");
let ApiHeaderTokenGuard = class ApiHeaderTokenGuard extends (0, passport_1.AuthGuard)('api-header-token') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        console.log(`API HEADER TOKEN - canActivate`);
        const isPublic = this.reflector.getAllAndOverride(is_public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        console.log(`API HEADER TOKEN - handleRequest`);
        console.log({ err, user, info });
        if (err || !user) {
            if (info instanceof jwt_1.TokenExpiredError) {
                throw new common_1.ForbiddenException(info.message);
            }
            if (info instanceof jwt_1.JsonWebTokenError) {
                throw new common_1.UnauthorizedException(info.message);
            }
            if (info instanceof Error) {
                throw new common_1.BadRequestException(info.message);
            }
            throw err || new common_1.BadGatewayException();
        }
        return user;
    }
};
exports.ApiHeaderTokenGuard = ApiHeaderTokenGuard;
exports.ApiHeaderTokenGuard = ApiHeaderTokenGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], ApiHeaderTokenGuard);
//# sourceMappingURL=api-header-token.guard.js.map