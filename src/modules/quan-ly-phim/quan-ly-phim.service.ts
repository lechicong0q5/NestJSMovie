import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuanLyPhimDto } from './dto/create-quan-ly-phim.dto';
import { UpdateQuanLyPhimDto } from './dto/update-quan-ly-phim.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePhimDto } from './dto/create-phim.dto';

@Injectable()
export class QuanLyPhimService {
  constructor(public prisma: PrismaService) {}

  async getListBanner(req: any, query: any) {
    console.log({ user: req.user });
    
    const ListBanner = await this.prisma.banner.findMany();

    return {
      items: ListBanner || [],
    };
  }

  async getListMovie(req: any, query: any) {
    console.log({ user: req.user });
    
    const ListVe = await this.prisma.phim.findMany();

    return {
      items: ListVe || [],
    };
  }

  async getMoviePage(req: any, query: any) {
    console.log({ user: req.user });
    let { page, pageSize, type_id, search } = query;
    page = +page > 0 ? +page : 1;
    pageSize = +pageSize > 0 ? +pageSize : 10;
    type_id = +type_id > 0 ? +type_id : 0;
    search = search || ``;

    console.log({ page, pageSize, type_id, search });

    const whereTypeId = type_id === 0 ? {} : { type_id: type_id };
    const whereSearch =
      search.trim() === `` ? {} : { ten_phim: { contains: search } };
    const where = { ...whereTypeId, ...whereSearch };

    // LIMIT 5 OFFSSET 5
    const skip = (page - 1) * pageSize;
    const totalItem = await this.prisma.phim.count({ where: where });
    const totalPage = Math.ceil(totalItem / pageSize);

    const videos = await this.prisma.phim.findMany({
      take: pageSize,
      skip: skip,

      orderBy: {
        ngay_khoi_chieu: `desc`, // sắp xếp giảm dần: đưa video mới nhất lên trên đầu
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

  async getMoviesByDate(ngay: string) {
    // Chuyển ngày từ chuỗi sang kiểu Date
    const date = new Date(ngay);
    if (isNaN(date.getTime())) {
      throw new Error('Ngày không hợp lệ! Định dạng phải là YYYY-MM-DD');
    }
  
    // Tìm danh sách phim theo ngày
    const movies = await this.prisma.phim.findMany({
      where: {
        ngay_khoi_chieu: {
          gte: new Date(date.setHours(0, 0, 0, 0)), // Ngày bắt đầu
          lt: new Date(date.setHours(23, 59, 59, 999)), // Ngày kết thúc
        },
      },
      orderBy: {
        ngay_khoi_chieu: 'asc',
      },
    });
  
    return {
      ngay,
      total: movies.length,
      items: movies,
    };
  }

  async ImageLocal(file) {
    console.log({ file });
    return `avatarLocal`;
  }

  async capNhatPhimUpload(ma_phim: number, file: Express.Multer.File) {
    if (!file) {
      throw new Error('Vui lòng tải lên một hình ảnh hợp lệ!');
    }

    // Kiểm tra phim có tồn tại không
    const phim = await this.prisma.phim.findUnique({ where: { ma_phim: Number(ma_phim) } });
    if (!phim) {
      throw new Error('Phim không tồn tại');
    }

    const hinhAnhMoi = `http://localhost:3000/uploads/${file.filename}`;

    const phimDaCapNhat = await this.prisma.phim.update({
      where: { ma_phim: Number(ma_phim) },
      data: { hinh_anh: hinhAnhMoi },
    });

    return {
      message: 'Cập nhật phim thành công!',
      data: phimDaCapNhat,
    };
  }


  async themPhimUploadVideo(createPhimDto: CreatePhimDto, file: Express.Multer.File) {
    if (!file) {
      throw new Error('Vui lòng tải lên một video hợp lệ!');
    }

    const videoPath = `http://localhost:3000/uploads/${file.filename}`;

    const phimMoi = await this.prisma.phim.create({
      data: {
        ten_phim: createPhimDto.ten_phim,
        trailer: videoPath,
      },
    });

    return {
      message: 'Thêm phim mới thành công!',
      data: phimMoi,
    };
  }

  async xoaPhim(id: number) {
    // Kiểm tra xem phim có tồn tại không
    const phim = await this.prisma.phim.findUnique({
      where: { ma_phim: id },
    });

    if (!phim) {
      throw new NotFoundException(`Không tìm thấy phim với ID ${id}`);
    }

    // Xóa phim
    await this.prisma.phim.delete({
      where: { ma_phim: id },
    });

    return { message: 'Xóa phim thành công!', phim };
  }

  async getListMovieInfor(req: any, query: any) {
    console.log({ user: req.user });
    
    const ListBanner = await this.prisma.phim.findMany();

    return {
      items: ListBanner || [],
    };
  }
}
