import { PartialType } from '@nestjs/swagger';
import { CreateLichChieuDto } from './create-lich-chieu.dto';


export class UpdateLichChieuDto extends PartialType(CreateLichChieuDto) {}
