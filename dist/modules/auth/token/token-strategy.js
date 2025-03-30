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
exports.CheckTokenStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const app_constant_1 = require("../../../common/constant/app.constant");
const prisma_service_1 = require("../../prisma/prisma.service");
let CheckTokenStrategy = class CheckTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'check-token') {
    constructor(prisma) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: app_constant_1.ACCESS_TOKEN_SECRET,
        });
        this.prisma = prisma;
    }
    async validate(payload) {
        console.log(`TOKEN - validate`);
        const user = await this.prisma.users.findUnique({
            where: {
                user_id: payload.userId,
            },
        });
        return user;
    }
};
exports.CheckTokenStrategy = CheckTokenStrategy;
exports.CheckTokenStrategy = CheckTokenStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CheckTokenStrategy);
//# sourceMappingURL=token-strategy.js.map