import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ACCESS_TOKEN_SECRET } from 'src/common/constant/app.constant';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class ApiHeaderTokenStrategy extends PassportStrategy(
  Strategy,
  'api-header-token',
) {
  constructor(public prisma: PrismaService) {
    super({
      jwtFromRequest: (req) => {
        if (!req.headers['api-header-token']) {
          throw new UnauthorizedException('API Header Token missing');
        }
        return req.headers['api-header-token'];
      },
      ignoreExpiration: false,
      secretOrKey: ACCESS_TOKEN_SECRET as string,
    });
  }

  async validate(payload: any) {
    console.log(`API HEADER TOKEN - validate`);

    const user = await this.prisma.users.findUnique({
      where: {
        user_id: payload.userId,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }
}
