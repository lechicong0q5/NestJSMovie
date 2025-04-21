import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UploadedFile, UseInterceptors, UseGuards } from '@nestjs/common';
import { QuanLyPhimService } from './quan-ly-phim.service';
import { CreateQuanLyPhimDto } from './dto/create-quan-ly-phim.dto';
import { UpdateQuanLyPhimDto } from './dto/update-quan-ly-phim.dto';
import { ApiBody, ApiConsumes, ApiParam, ApiTags, ApiHeader } from '@nestjs/swagger';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import uploadLocal from 'src/common/multer/local.multer';
import { FileUploadDto } from './dto/file-upload.dto';
import { CreatePhimDto } from './dto/create-phim.dto';
import { query, Request } from 'express';
import { ApiHeaderTokenGuard } from '../auth/test/api-header-token.guard';

@ApiTags('QuanLyPhim')
@SkipPermission()
@Controller('QuanLyPhim')
export class QuanLyPhimController {
  constructor(private readonly quanLyPhimService: QuanLyPhimService) {}

  @Get('LayDanhSachBanner')
  @ApiHeader({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true })
  @UseGuards(ApiHeaderTokenGuard)
  async getListDatVe(
    @Query() query: any,
    @Req() req: Request,
  ) {
    const result = await this.quanLyPhimService.getListBanner(req, query);
    return result;
  }

  @Get('LayDanhSachPhim')
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  @UseGuards(ApiHeaderTokenGuard)
  async getListPhim(
    @Query('ten_phim') ten_phim: string,
    @Req() req: Request,
  ) {
    const result = await this.quanLyPhimService.getListMovie(req, ten_phim);
    return result;
  }
  
  @Get('LayDanhSachLoaiNguoiDungPhanTrang')
  @ApiHeader({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true })
  @UseGuards(ApiHeaderTokenGuard)
  async getListVideo(
    @Query() query: any,
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
    @Req() req: Request,
  ) {
    const result = await this.quanLyPhimService.getMoviePage(req, query);
    return result;
  }

  @Get('LayDanhSachPhimTheoNgay')
  @ApiHeader({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true })
  @UseGuards(ApiHeaderTokenGuard)
  async getMoviesByDate(
    @Query('ngay') ngay: string,
    @Req() req: Request
  ) {
    const result = await this.quanLyPhimService.getMoviesByDate(ngay);
    return result;
  }

  @Post('ThemPhimUploadHinh')
  @ApiHeader({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true })
  @UseGuards(ApiHeaderTokenGuard)
  @UseInterceptors(FileInterceptor('avatar', uploadLocal))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of movie',
    type: FileUploadDto,
  })
  async avatarLocal(@UploadedFile() file: Express.Multer.File) {
    return await this.quanLyPhimService.ImageLocal(file);
  }

  @Post('CapNhatPhimUpload/:ma_phim')
  @ApiHeader({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true })
  @UseGuards(ApiHeaderTokenGuard)
  @UseInterceptors(FileInterceptor('hinh_anh'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload hình ảnh và cập nhật phim',
    schema: {
      type: 'object',
      properties: {
        hinh_anh: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async capNhatPhimUpload(
    @Param('ma_phim') ma_phim: number,
    @UploadedFile() file: Express.Multer.File
  ) {
    return await this.quanLyPhimService.capNhatPhimUpload(ma_phim, file);
  }

  @Post('ThemPhimUploadVideo')
  @ApiHeader({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true })
  @UseGuards(ApiHeaderTokenGuard)
  @UseInterceptors(FileInterceptor('video_phim'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Tạo phim mới và upload video',
    schema: {
      type: 'object',
      properties: {
        ten_phim: { type: 'string' },
        video_phim: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async themPhimUploadVideo(
    @Body() createPhimDto: CreatePhimDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return await this.quanLyPhimService.themPhimUploadVideo(createPhimDto, file);
  }

  @Delete('XoaPhim/:id')
  @ApiHeader({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true })
  @UseGuards(ApiHeaderTokenGuard)
  @ApiParam({ name: 'id', description: 'ID của phim cần xóa', type: Number })
  async xoaPhim(@Param('id') id: string) {
    return await this.quanLyPhimService.xoaPhim(Number(id));
  }

  @Get('LayDanhSachThongTinPhim')
  @ApiHeader({ name: 'api-header-token', description: 'Nhập token trực tiếp vào header: api-header-token', required: true })
  @UseGuards(ApiHeaderTokenGuard)
  async getListMovieInfor(
    @Query() query: any,
    @Req() req: Request,
  ) {
    const result = await this.quanLyPhimService.getListMovieInfor(req, query);
    return result;
  }
}
