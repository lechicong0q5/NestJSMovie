import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuanLyRapDto } from './dto/create-quan-ly-rap.dto';
import { UpdateQuanLyRapDto } from './dto/update-quan-ly-rap.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuanLyRapService {
  constructor(private prisma: PrismaService) {}

  async getLayThongTinHeThong(maHeThongRap: number) {
    const heThongRap = await this.prisma.he_thong_rap.findUnique({
      where: { ma_he_thong_rap: maHeThongRap },
    });

    if (!heThongRap) {
      throw new NotFoundException(`Không tìm thấy hệ thống rạp với mã: ${maHeThongRap}`);
    }

    return heThongRap;
  }

  async getLayThongTinCumRapTheoHeThong(maHeThongRap: number) {
    const cumRapList = await this.prisma.cum_rap.findMany({
      where: { ma_he_thong_rap: maHeThongRap },
    });

    if (cumRapList.length === 0) {
      throw new NotFoundException(`Không tìm thấy cụm rạp cho hệ thống rạp có mã: ${maHeThongRap}`);
    }

    return cumRapList;
  }

  async getLichChieuHeThongRap(maRap: number) {
    const lichChieuList = await this.prisma.lich_chieu.findMany({
      where: { ma_rap: maRap },
    });

    if (lichChieuList.length === 0) {
      throw new NotFoundException(`Không tìm thấy lịch chiếu cho rạp có mã: ${maRap}`);
    }

    return lichChieuList;
  }

  async getLichChieuPhim(maPhim: number) {
    const lichChieuList = await this.prisma.lich_chieu.findMany({
      where: { ma_phim: maPhim },
    });

    if (lichChieuList.length === 0) {
      throw new NotFoundException(`Không tìm thấy lịch chiếu cho phim có mã: ${maPhim}`);
    }

    return lichChieuList;
  }
}
