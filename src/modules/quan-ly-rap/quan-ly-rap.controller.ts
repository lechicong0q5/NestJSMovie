import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuanLyRapService } from './quan-ly-rap.service';
import { CreateQuanLyRapDto } from './dto/create-quan-ly-rap.dto';
import { UpdateQuanLyRapDto } from './dto/update-quan-ly-rap.dto';
import { ApiHeader, ApiParam } from '@nestjs/swagger';
import { ApiHeaderTokenGuard } from '../auth/test/api-header-token.guard';


@Controller('quan-ly-rap')
export class QuanLyRapController {
  constructor(private readonly quanLyRapService: QuanLyRapService) {}

  @Get('LayThongTinHeThong/:ma_he_thong_rap')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  @ApiParam({ name: 'ma_he_thong_rap', description: 'Mã hệ thống rạp', type: Number })
  async getLayThongTinHeThong(@Param('ma_he_thong_rap') maHeThongRap: string) {
    return await this.quanLyRapService.getLayThongTinHeThong(Number(maHeThongRap));
  }

  @Get('LayThongTinCumRapTheoHeThong/:ma_he_thong_rap')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  @ApiParam({ name: 'ma_he_thong_rap', description: 'Mã hệ thống rạp', type: Number })
  async getLayThongTinCumRapTheoHeThong(@Param('ma_he_thong_rap') maHeThongRap: string) {
    return await this.quanLyRapService.getLayThongTinCumRapTheoHeThong(Number(maHeThongRap));
  }

  @Get('LayThongTinLichChieuHeThongRap/:ma_rap')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  @ApiParam({ name: 'ma_rap', description: 'Mã rạp', type: Number })
  async getLichChieuHeThongRap(@Param('ma_rap') maRap: string) {
    return await this.quanLyRapService.getLichChieuHeThongRap(Number(maRap));
  }

  @Get('LayThongTinLichChieuPhim/:ma_phim')
  @UseGuards(ApiHeaderTokenGuard)
  @ApiHeader({
    name: 'api-header-token',
    description: 'Nhập token trực tiếp vào header: api-header-token',
    required: true,
  })
  @ApiParam({ name: 'ma_phim', description: 'Mã phim', type: Number })
  async getLichChieuPhim(@Param('ma_phim') maPhim: string) {
    return await this.quanLyRapService.getLichChieuPhim(Number(maPhim));
  }
}
