import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service.js';
import { AuthController } from './auth.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../database/entities/users.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Users])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
