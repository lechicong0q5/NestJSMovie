import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { CreateQuanLyPhimDto } from './create-quan-ly-phim.dto';

export class UpdateQuanLyPhimDto extends PartialType(CreateQuanLyPhimDto) {
    @IsOptional()
  @ApiProperty({ required: false })
  ten_phim?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  trailer?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  mo_ta?: string;
}
