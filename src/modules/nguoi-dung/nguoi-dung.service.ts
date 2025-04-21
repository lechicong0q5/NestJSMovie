import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NguoiDungService {

  constructor(public prisma: PrismaService) {}

  async getListTypeUser(req: any, query: any) {
    console.log({ user: req.user });
    
    const ListUserType = await this.prisma.roles.findMany();

    return {
      items: ListUserType || [],
    };
  }


  async getListUser(req: any, tu_khoa: string) {
    console.log({ user: req.user, tu_khoa });
  
    const listUser = await this.prisma.users.findMany({
      where: tu_khoa
        ? {
            full_name: {
              contains: tu_khoa.toLowerCase(),
            },
          }
        : undefined,
    });
  
    return {
      items: listUser || [],
    };
  }
  


  async getUserPage(req: any, query: any) {
    console.log({ user: req.user });
    let { page, pageSize, type_id, search } = query;
    page = +page > 0 ? +page : 1;
    pageSize = +pageSize > 0 ? +pageSize : 10;
    type_id = +type_id > 0 ? +type_id : 0;
    search = search || ``;

    console.log({ page, pageSize, type_id, search });

    const whereTypeId = type_id === 0 ? {} : { type_id: type_id };
    const whereSearch =
      search.trim() === `` ? {} : { full_name: { contains: search } };
    const where = { ...whereTypeId, ...whereSearch };

    // LIMIT 5 OFFSSET 5
    const skip = (page - 1) * pageSize;
    const totalItem = await this.prisma.users.count({ where: where });
    const totalPage = Math.ceil(totalItem / pageSize);

    const videos = await this.prisma.users.findMany({
      take: pageSize,
      skip: skip,

      orderBy: {
        created_at: `desc`, // sắp xếp giảm dần: đưa video mới nhất lên trên đầu
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

  async FindUserDetail(id: string, req: any) {
    const video = await this.prisma.users.findUnique({
      where: {
        user_id: Number(id),
      },
    });
    return video;
  }

  async FindUserDetailPage(id: string, query: any, req: any) {
    console.log({ id, query });
  
    // Nếu có ID, tìm kiếm người dùng theo ID
    if (id) {
      const user = await this.prisma.users.findUnique({
        where: {
          user_id: Number(id),
        },
      });
  
      if (!user) {
        throw new BadRequestException(`Không tìm thấy người dùng với ID: ${id}`);
      }
  
      return {
        totalItem: 1,
        totalPage: 1,
        page: 1,
        pageSize: 1,
        items: [user],
      };
    }
  
    // Nếu không có ID, tìm kiếm theo phân trang
    let { page, pageSize, type_id, search } = query;
    page = +page > 0 ? +page : 1;
    pageSize = +pageSize > 0 ? +pageSize : 10;
    type_id = +type_id > 0 ? +type_id : 0;
    search = search || '';
  
    console.log({ page, pageSize, type_id, search });
  
    const whereTypeId = type_id === 0 ? {} : { type_id: type_id };
    const whereSearch = search.trim() === '' ? {} : { full_name: { contains: search } };
    const where = { ...whereTypeId, ...whereSearch };
  
    // Tính toán phân trang
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

  async createUser(createNguoiDungDto: CreateNguoiDungDto, req: any) {
    const { user_id, ...userData } = createNguoiDungDto;
    
    console.log(`Tạo người dùng mới`, userData);

    // Kiểm tra email đã tồn tại chưa
    const existingUser = await this.prisma.users.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new Error('Email đã tồn tại!');
    }

    // Tạo người dùng mới
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


  async updateUser(updateNguoiDungDto: UpdateNguoiDungDto, req: any) {
    const { user_id, ...updateData } = updateNguoiDungDto;
    console.log(`Cập nhật người dùng ID: ${user_id}`, updateData);

    // Kiểm tra người dùng có tồn tại không
    const user = await this.prisma.users.findUnique({
      where: { user_id: Number(user_id) },
    });

    if (!user) {
      throw new Error('Người dùng không tồn tại');
    }

    // Cập nhật thông tin
    const updatedUser = await this.prisma.users.update({
      where: { user_id: Number(user_id) },
      data: {
        ...updateData, // Cập nhật các thông tin được gửi lên
        updated_at: new Date(),
      },
    });

    return {
      message: 'Cập nhật thành công',
      user: updatedUser,
    };
  }

  async deleteUser(userId: number) {
    // Kiểm tra xem người dùng có tồn tại không
    const user = await this.prisma.users.findUnique({
      where: { user_id: userId },
    });
  
    if (!user) {
      throw new Error('Người dùng không tồn tại!');
    }
  
    // Xoá người dùng
    await this.prisma.users.delete({
      where: { user_id: userId },
    });
  
    return { message: 'Xóa người dùng thành công!' };
  }
  
}
