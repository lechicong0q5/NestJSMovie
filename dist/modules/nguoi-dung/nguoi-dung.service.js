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
exports.NguoiDungService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NguoiDungService = class NguoiDungService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getListTypeUser(req, query) {
        console.log({ user: req.user });
        const ListUserType = await this.prisma.roles.findMany();
        return {
            items: ListUserType || [],
        };
    }
    async getListUser(req, query) {
        console.log({ user: req.user });
        const ListUser = await this.prisma.users.findMany();
        return {
            items: ListUser || [],
        };
    }
    async getUserPage(req, query) {
        console.log({ user: req.user });
        let { page, pageSize, type_id, search } = query;
        page = +page > 0 ? +page : 1;
        pageSize = +pageSize > 0 ? +pageSize : 10;
        type_id = +type_id > 0 ? +type_id : 0;
        search = search || ``;
        console.log({ page, pageSize, type_id, search });
        const whereTypeId = type_id === 0 ? {} : { type_id: type_id };
        const whereSearch = search.trim() === `` ? {} : { full_name: { contains: search } };
        const where = { ...whereTypeId, ...whereSearch };
        const skip = (page - 1) * pageSize;
        const totalItem = await this.prisma.users.count({ where: where });
        const totalPage = Math.ceil(totalItem / pageSize);
        const videos = await this.prisma.users.findMany({
            take: pageSize,
            skip: skip,
            orderBy: {
                created_at: `desc`,
            },
            where: where,
        });
        return {
            page,
            pageSize,
            totalPage,
            totalItem,
            items: videos || [],
        };
    }
    async FindUserDetail(id, req) {
        const video = await this.prisma.users.findUnique({
            where: {
                user_id: Number(id),
            },
        });
        return video;
    }
    async FindUserDetailPage(id, query, req) {
        console.log({ id, query });
        if (id) {
            const user = await this.prisma.users.findUnique({
                where: {
                    user_id: Number(id),
                },
            });
            if (!user) {
                throw new common_1.BadRequestException(`Không tìm thấy người dùng với ID: ${id}`);
            }
            return {
                totalItem: 1,
                totalPage: 1,
                page: 1,
                pageSize: 1,
                items: [user],
            };
        }
        let { page, pageSize, type_id, search } = query;
        page = +page > 0 ? +page : 1;
        pageSize = +pageSize > 0 ? +pageSize : 10;
        type_id = +type_id > 0 ? +type_id : 0;
        search = search || '';
        console.log({ page, pageSize, type_id, search });
        const whereTypeId = type_id === 0 ? {} : { type_id: type_id };
        const whereSearch = search.trim() === '' ? {} : { full_name: { contains: search } };
        const where = { ...whereTypeId, ...whereSearch };
        const skip = (page - 1) * pageSize;
        const totalItem = await this.prisma.users.count({ where: where });
        const totalPage = Math.ceil(totalItem / pageSize);
        const users = await this.prisma.users.findMany({
            take: pageSize,
            skip: skip,
            orderBy: {
                created_at: 'desc',
            },
            where: where,
        });
        return {
            page,
            pageSize,
            totalPage,
            totalItem,
            items: users || [],
        };
    }
    async createUser(createNguoiDungDto, req) {
        const { user_id, ...userData } = createNguoiDungDto;
        console.log(`Tạo người dùng mới`, userData);
        const existingUser = await this.prisma.users.findUnique({
            where: { email: userData.email },
        });
        if (existingUser) {
            throw new Error('Email đã tồn tại!');
        }
        const newUser = await this.prisma.users.create({
            data: {
                user_id: user_id,
                ...userData,
                created_at: new Date(),
                updated_at: new Date(),
            },
        });
        return {
            message: 'Tạo người dùng thành công!',
            user: newUser,
        };
    }
    async updateUser(updateNguoiDungDto, req) {
        const { user_id, ...updateData } = updateNguoiDungDto;
        console.log(`Cập nhật người dùng ID: ${user_id}`, updateData);
        const user = await this.prisma.users.findUnique({
            where: { user_id: Number(user_id) },
        });
        if (!user) {
            throw new Error('Người dùng không tồn tại');
        }
        const updatedUser = await this.prisma.users.update({
            where: { user_id: Number(user_id) },
            data: {
                ...updateData,
                updated_at: new Date(),
            },
        });
        return {
            message: 'Cập nhật thành công',
            user: updatedUser,
        };
    }
    async deleteUser(userId) {
        const user = await this.prisma.users.findUnique({
            where: { user_id: userId },
        });
        if (!user) {
            throw new Error('Người dùng không tồn tại!');
        }
        await this.prisma.users.delete({
            where: { user_id: userId },
        });
        return { message: 'Xóa người dùng thành công!' };
    }
};
exports.NguoiDungService = NguoiDungService;
exports.NguoiDungService = NguoiDungService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NguoiDungService);
//# sourceMappingURL=nguoi-dung.service.js.map