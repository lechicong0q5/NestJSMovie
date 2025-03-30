import { Injectable } from '@nestjs/common';
import { CreateDatVeDto } from './dto/create-dat-ve.dto';
import { UpdateDatVeDto } from './dto/update-dat-ve.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLichChieuDto } from './dto/create-lich-chieu.dto';

@Injectable()
export class DatVeService {
  constructor(public prisma: PrismaService) {}


  async create(createDatVeDto: CreateDatVeDto) {
    const DatVeNew = await this.prisma.dat_ve.create({
      data: {
        user_id: createDatVeDto.user_id,
        ma_lich_chieu: createDatVeDto.ma_lich_chieu,
        ma_ghe: createDatVeDto.ma_ghe
      },
    });

    return DatVeNew;
  }

  async getListDatVe(req: any, query: any) {
    console.log({ user: req.user });
    
    const ListVe = await this.prisma.dat_ve.findMany();

    return {
      items: ListVe || [],
    };
  }


  async createLichChieu(createLichChieuDto: CreateLichChieuDto) {
    const { ma_rap, ma_phim, gia_ve } = createLichChieuDto;

    const DatVeNew = await this.prisma.lich_chieu.create({
      data: {
        ma_rap: ma_rap,
        ma_phim: ma_phim,
        gia_ve: gia_ve
      },
    });
  
    return DatVeNew;
  }
}
