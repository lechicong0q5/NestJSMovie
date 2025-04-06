import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import PrismaModule from './modules/prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './modules/auth/auth.module';
import { CheckTokenStrategy } from './modules/auth/token/token-strategy';
import { DatVeModule } from './modules/dat-ve/dat-ve.module';
import { CheckPermissionStrategy } from './modules/auth/permission/permission-strategy';
import { NguoiDungModule } from './modules/nguoi-dung/nguoi-dung.module';
import { QuanLyPhimModule } from './modules/quan-ly-phim/quan-ly-phim.module';
import { QuanLyRapModule } from './modules/quan-ly-rap/quan-ly-rap.module';
import { ApiHeaderTokenStrategy } from './modules/auth/test/api-header-token.strategy';


@Module({
  imports: [
    // doc: https://docs.nestjs.com/recipes/serve-static
    // npm install --save @nestjs/serve-static
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
    ConfigModule.forRoot(),
    PrismaModule,
    AuthModule,
    DatVeModule,
    NguoiDungModule,
    QuanLyPhimModule,
    QuanLyRapModule,
  ],
  controllers: [AppController],
  providers: [AppService, CheckTokenStrategy, CheckPermissionStrategy, ApiHeaderTokenStrategy],
})
export class AppModule {}