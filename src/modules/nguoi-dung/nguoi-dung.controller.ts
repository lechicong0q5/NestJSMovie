import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Headers, Put } from '@nestjs/common';
import { NguoiDungService } from './nguoi-dung.service';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { query } from 'express';


@SkipPermission()
@Controller('QuanLyNguoiDung')
export class NguoiDungController {
  constructor(private readonly nguoiDungService: NguoiDungService) {}

  @Get(`LayDanhSachLoaiNguoiDung`)
  @ApiBearerAuth()
    async getListTypeUser(
      @Query()
      query: any,
      @Req()
      req: Request,
    ) {
      const result = await this.nguoiDungService.getListTypeUser(req, query);
      return result;
    }

  @Get(`LayDanhSachNguoiDung`)
    async getListUser(
      @Query()
      query: any,
      @Req()
      req: Request,
    ) {
      const result = await this.nguoiDungService.getListUser(req, query);
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
      const result = await this.nguoiDungService.getUserPage(req, query);
      return result;
    }

    @Get(`TimKiemNguoiDung/:id`)
    @ApiBearerAuth()
    @SkipPermission()
    async FindUserDetail(
      @Param()
      param: any,
      @Param(`id`)
      id: string,
      @Headers()
      headers: any,
      @Req()
      req: Request,
    ) {
      console.log({ headers });
  
      const result = await this.nguoiDungService.FindUserDetail( id ,req);
      return result;
    }

    @Get(`TimKiemNguoiDungPhanTrang`)
    @ApiBearerAuth()
    @SkipPermission()
    async FindUserDetailPage(
      @Query() query: any,
      @Query('id') id: string,
      @Req() req: Request,
    ) {
      console.log({ headers: req.headers });
      return await this.nguoiDungService.FindUserDetailPage(id, query, req);
    }


    @Post(`TaoNguoiDung`)
    @ApiBearerAuth()
    @SkipPermission()
    async createUser(
      @Body() createNguoiDungDto: CreateNguoiDungDto, // Nhận dữ liệu từ body
      @Req() req: Request,
    ) {
      return await this.nguoiDungService.createUser(createNguoiDungDto, req);
    }

    @Put(`CapNhatThongTinNguoiDung`)
    @ApiBearerAuth()
    @SkipPermission()
    async updateUser(
    @Body() updateNguoiDungDto: UpdateNguoiDungDto, // Lấy thông tin từ body
    @Req() req: Request,
  ) {
    return await this.nguoiDungService.updateUser(updateNguoiDungDto, req);
  }

  @Delete('XoaNguoiDung/:id')
 @ApiBearerAuth()
  @SkipPermission()
async deleteUser(
  @Param('id') id: string,
  @Req() req: Request
) {
  const result = await this.nguoiDungService.deleteUser(Number(id));
  return result;
}
}
