import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber} from 'class-validator';


export class CreateLichChieuDto {
    @IsNumber()
  @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
  @ApiProperty()
  ma_rap: number;
  @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
  @ApiProperty()
  ma_phim: number;
  @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
  @ApiProperty()
  gia_ve: number;
}
