import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePhimDto {
  @IsNotEmpty({ message: 'Tên phim không được để trống' })
  @ApiProperty()
  ten_phim: string;
}
