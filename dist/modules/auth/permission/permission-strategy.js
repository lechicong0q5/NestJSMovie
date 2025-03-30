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
exports.CheckPermissionStrategy = void 0;
const passport_custom_1 = require("passport-custom");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CheckPermissionStrategy = class CheckPermissionStrategy extends (0, passport_1.PassportStrategy)(passport_custom_1.Strategy, 'check-permission') {
    constructor(prisma) {
        super();
        this.prisma = prisma;
    }
    async validate(req) {
        console.log(`PERMISSION - validate`);
        const user = req.user;
        const role_id = user.role_id;
        const endpoint = req.route.path;
        const method = req.method;
        if (role_id === 1)
            return true;
        console.log({
            role_id,
            endpoint,
            method,
        });
        const permission = await this.prisma.permissions.findFirst({
            where: {
                endpoint: endpoint,
                method: method,
            },
        });
        if (!permission)
            throw new common_1.BadRequestException(`Bạn không đủ quyền sử dụng tài nguyên (API) này`);
        const role_permission = await this.prisma.role_permissions.findFirst({
            where: {
                permission_id: permission.permission_id,
                role_id: role_id,
                is_active: true,
            },
        });
        if (!role_permission)
            throw new common_1.BadRequestException(`Bạn không đủ quyền sử dụng tài nguyên (API) này`);
        return true;
    }
};
exports.CheckPermissionStrategy = CheckPermissionStrategy;
exports.CheckPermissionStrategy = CheckPermissionStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CheckPermissionStrategy);
//# sourceMappingURL=permission-strategy.js.map