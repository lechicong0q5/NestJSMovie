import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateNguoiDungDto } from './create-nguoi-dung.dto';
import { IsOptional, IsEmail, IsString, IsUrl, IsNumber } from 'class-validator';

export class UpdateNguoiDungDto extends PartialType(CreateNguoiDungDto) {
  @ApiProperty({ required: true })
  @IsNumber()
  user_id: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString({ message: 'Họ tên phải là chuỗi' })
  full_name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl({}, { message: 'Avatar phải là URL hợp lệ' })
  avatar?: string;
}
