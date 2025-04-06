import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Missing access token');
    }

    const token = authHeader.split(' ')[1]; // Lấy token sau "Bearer "
    if (!token) {
      throw new UnauthorizedException('Invalid access token');
    }

    try {
      const payload = this.jwtService.verify(token);
      request.user = payload; // Lưu user vào request để sử dụng sau
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
