import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service.js';
import { AuthController } from './auth.controller.js';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
