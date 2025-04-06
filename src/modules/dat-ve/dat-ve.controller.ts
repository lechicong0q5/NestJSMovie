import { Controller, Get, Post, Body, Query, UseGuards, Req } from '@nestjs/common';
import { DatVeService } from './dat-ve.service';
import { CreateDatVeDto } from './dto/create-dat-ve.dto';
import { CreateLichChieuDto } from './dto/create-lich-chieu.dto';
import { ApiTags, ApiHeader } from '@nestjs/swagger';
import { ApiHeaderTokenGuard } from '../auth/test/api-header-token.guard';


@ApiTags('QuanLyDatVe')
@Controller('QuanLyDatVe')
export class DatVeController {
  constructor(private readonly datVeService: DatVeService) {}

  @Post('Datve')
  @UseGuards(ApiHeaderTokenGuard) 
  @ApiHeader({
    name: 'api-header-token', 
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async create(@Body() createDatVeDto: CreateDatVeDto) {
    return await this.datVeService.create(createDatVeDto);
  }

  @Get('LayDanhSachPhongVe')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async getListDatVe(@Query() query: any, @Req() req: Request) {
    return await this.datVeService.getListDatVe(req, query);
  }

  @Post('TaoLichChieu')
  @UseGuards(ApiHeaderTokenGuard) 
  @ApiHeader({
    name: 'api-header-token', 
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  async createLichChieu(@Body() createLichChieuDto: CreateLichChieuDto) {
    return await this.datVeService.createLichChieu(createLichChieuDto);
  }
}
