import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { QuanLyPhimService } from './quan-ly-phim.service';
import { CreateQuanLyPhimDto } from './dto/create-quan-ly-phim.dto';
import { UpdateQuanLyPhimDto } from './dto/update-quan-ly-phim.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import uploadLocal from 'src/common/multer/local.multer';
import { FileUploadDto } from './dto/file-upload.dto';
import { CreatePhimDto } from './dto/create-phim.dto';

@ApiTags('QuanLyPhim')
@SkipPermission()
@Controller('QuanLyPhim')
export class QuanLyPhimController {
  constructor(private readonly quanLyPhimService: QuanLyPhimService) {}

   @Get(`LayDanhSachBanner`)
   @ApiBearerAuth()
    async getListDatVe(
      @Query()
      query: any,
      @Req()
      req: Request,
    ) {
      const result = await this.quanLyPhimService.getListBanner(req, query);
      return result;
    }

    @Get(`LayDanhSachPhim`)
    @ApiBearerAuth()
    async getListPhim(
      @Query()
      query: any,
      @Req()
      req: Request,
    ) {
      const result = await this.quanLyPhimService.getListMovie(req, query);
      return result;
    }

    @Get(`LayDanhSachLoaiNguoiDungPhanTrang`)
    @ApiBearerAuth()
    async getListVideo(
    @Query()
    query: any,
    @Query(`page`)
    page: string,
    @Query(`pageSize`)
    pageSize: string,
    @Req()
    req: Request,
    ) {
    const result = await this.quanLyPhimService.getMoviePage(req, query);
    return result;
    }

    @Get('LayDanhSachPhimTheoNgay')
    @ApiBearerAuth()
    async getMoviesByDate(
    @Query('ngay') ngay: string,
    @Req() req: Request
    ) {
    const result = await this.quanLyPhimService.getMoviesByDate(ngay);
    return result;
    }

  @UseInterceptors(FileInterceptor('avatar', uploadLocal))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of movie',
    type: FileUploadDto,
  })
  @Post(`ThemPhimUploadHinh`)
  @ApiBearerAuth()
  async avatarLocal(@UploadedFile() file) {
    return await this.quanLyPhimService.ImageLocal(file);
  }


  @Post('CapNhatPhimUpload/:ma_phim')
  @ApiBearerAuth()
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
  @ApiBearerAuth()
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
  @ApiParam({ name: 'id', description: 'ID của phim cần xóa', type: Number })
  async xoaPhim(@Param('id') id: string) {
    return await this.quanLyPhimService.xoaPhim(Number(id));
  }

  @SkipPermission()
  @Get(`LayDanhSachBanner`)
   @ApiBearerAuth()
    async getListMovieInfor(
      @Query()
      query: any,
      @Req()
      req: Request,
    ) {
      const result = await this.quanLyPhimService.getListMovieInfor(req, query);
      return result;
    }
}
