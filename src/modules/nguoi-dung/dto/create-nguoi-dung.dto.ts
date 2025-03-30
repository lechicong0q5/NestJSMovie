import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateNguoiDungDto {
      @IsNumber()
      @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
      @ApiProperty()
      user_id: number;
      @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
      @ApiProperty()
      email: string;
      @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
      @ApiProperty()
      pass_word: string;
      @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
      @ApiProperty()
      full_name: string;
      @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
      @ApiProperty()
      avatar: string;
}
