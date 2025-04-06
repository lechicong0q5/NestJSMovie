import { Module } from '@nestjs/common';
import { DatVeService } from './dat-ve.service';
import { DatVeController } from './dat-ve.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [DatVeController],
  providers: [DatVeService],
})
export class DatVeModule {}
