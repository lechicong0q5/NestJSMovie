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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const app_constant_1 = require("../../common/constant/app.constant");
let AuthService = class AuthService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async login(createUserDto) {
        const { email, pass_word } = createUserDto;
        console.log({ email, pass_word });
        const userExists = await this.prisma.users.findFirst({
            where: {
                email: email,
            },
        });
        if (!userExists) {
            throw new common_1.BadRequestException(`Tài khoản chưa tồn tại, Vui lòng đăng ký`);
        }
        if (!userExists.pass_word) {
            if (userExists.face_app_id) {
                throw new common_1.BadRequestException(`Vui lòng đăng nhập bằng facebook, để tạo mật khẩu mới`);
            }
            if (userExists.google_id) {
                throw new common_1.BadRequestException(`Vui lòng đăng nhập bằng google, để tạo mật khẩu mới`);
            }
            throw new common_1.BadRequestException(`Không hợp lệ, vui lòng liện hệ chăm sóc khách hàng`);
        }
        const isPassword = bcrypt.compareSync(pass_word, userExists.pass_word);
        if (!isPassword) {
            throw new common_1.BadRequestException(`Mật khẩu không chính xác`);
        }
        const tokens = this.createTokens(userExists.user_id);
        return tokens;
    }
    createTokens(userId) {
        if (!userId)
            throw new common_1.BadRequestException(`Không có userId để tạo token`);
        const accessToken = this.jwt.sign({ userId: userId }, {
            expiresIn: app_constant_1.ACCESS_TOKEN_EXPIRED,
            secret: app_constant_1.ACCESS_TOKEN_SECRET,
        });
        const refreshToken = this.jwt.sign({ userId: userId }, {
            expiresIn: app_constant_1.REFRESH_TOKEN_EXPIRED,
            secret: app_constant_1.REFRESH_TOKEN_SECRET,
        });
        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map