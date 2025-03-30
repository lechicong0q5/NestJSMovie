import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber} from 'class-validator';


export class CreateDatVeDto {
    @IsNumber()
  @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
  @ApiProperty()
  user_id: number;
  @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
  @ApiProperty()
  ma_lich_chieu: number;
  @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
  @ApiProperty()
  ma_ghe: number;
}
