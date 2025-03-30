import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateQuanLyPhimDto {
    @IsNumber()
    @IsNotEmpty({ message: `Mã phim không được để trống` })
    @ApiProperty()
    ma_phim: number;

    @IsString()
    @IsNotEmpty({ message: `Tên phim không được để trống` })
    @ApiProperty()
    ten_phim: string;

    @IsString()
    @IsNotEmpty({ message: `Trailer không được để trống` })
    @ApiProperty()
    trailer: string;

    @IsString()
    @IsNotEmpty({ message: `Hình ảnh không được để trống` })
    @ApiProperty()
    hinh_anh: string;

    @IsString()
    @IsNotEmpty({ message: `Mô tả không được để trống` })
    @ApiProperty()
    mo_ta: string;

    @IsDateString()
    @IsNotEmpty({ message: `Ngày khởi chiếu không được để trống` })
    @ApiProperty({ example: "2025-03-23" })
    ngay_khoi_chieu: string;
}