import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Headers, Put, UseGuards } from '@nestjs/common';
import { NguoiDungService } from './nguoi-dung.service';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { ApiTags, ApiHeader } from '@nestjs/swagger';
import { ApiHeaderTokenGuard } from '../auth/test/api-header-token.guard';

@ApiTags('QuanLyNguoiDung')
@Controller('QuanLyNguoiDung')
export class NguoiDungController {
  constructor(private readonly nguoiDungService: NguoiDungService) {}

  @Get('LayDanhSachLoaiNguoiDung')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async getListTypeUser(@Query() query: any, @Req() req: Request) {
    return await this.nguoiDungService.getListTypeUser(req, query);
  }

  @Get('LayDanhSachNguoiDung')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async getListUser(
    @Query('tu_khoa') tu_khoa: string,
    @Req() req: Request,
  ) {
    return await this.nguoiDungService.getListUser(req, tu_khoa);
  }
  

  @Get('LayDanhSachLoaiNguoiDungPhanTrang')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async getListVideo(
    @Query() query: any,
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
    @Req() req: Request,
  ) {
    return await this.nguoiDungService.getUserPage(req, query);
  }

  @Get('TimKiemNguoiDung/:id')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async FindUserDetail(
    @Param('id') id: string,
    @Headers() headers: any,
    @Req() req: Request,
  ) {
    console.log({ headers });
    return await this.nguoiDungService.FindUserDetail(id, req);
  }

  @Get('TimKiemNguoiDungPhanTrang')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async FindUserDetailPage(
    @Query() query: any,
    @Query('id') id: string,
    @Req() req: Request,
  ) {
    console.log({ headers: req.headers });
    return await this.nguoiDungService.FindUserDetailPage(id, query, req);
  }

  @Post('TaoNguoiDung')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async createUser(@Body() createNguoiDungDto: CreateNguoiDungDto, @Req() req: Request) {
    return await this.nguoiDungService.createUser(createNguoiDungDto, req);
  }

  @Put('CapNhatThongTinNguoiDung')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async updateUser(@Body() updateNguoiDungDto: UpdateNguoiDungDto, @Req() req: Request) {
    return await this.nguoiDungService.updateUser(updateNguoiDungDto, req);
  }

  @Delete('XoaNguoiDung/:id')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async deleteUser(@Param('id') id: string, @Req() req: Request) {
    return await this.nguoiDungService.deleteUser(Number(id));
  }
}
