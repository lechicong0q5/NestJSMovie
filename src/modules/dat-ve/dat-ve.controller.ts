import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req } from '@nestjs/common';
import { DatVeService } from './dat-ve.service';
import { CreateDatVeDto } from './dto/create-dat-ve.dto';
import { UpdateDatVeDto } from './dto/update-dat-ve.dto';
import { CreateLichChieuDto } from './dto/create-lich-chieu.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';

@SkipPermission()
@ApiTags("QuanLyDatVe")
@Controller('QuanLyDatVe')
export class DatVeController {
  constructor(private readonly datVeService: DatVeService) {}

  @Post(`Datve`)
  @ApiBearerAuth()
  async create(@Body() createDatVeDto: CreateDatVeDto) {
    return await this.datVeService.create(createDatVeDto);
  }

  @Get(`LayDanhSachPhongVe`)
  @ApiBearerAuth()
  async getListDatVe(
    @Query()
    query: any,
    @Req()
    req: Request,
  ) {
    const result = await this.datVeService.getListDatVe(req, query);
    return result;
  }

  @Post(`TaoLichChieu`)
  async createLichChieu(@Body() createLichChieuDto: CreateLichChieuDto) {
    return await this.datVeService.createLichChieu(createLichChieuDto);
  }
}
