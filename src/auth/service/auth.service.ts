import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../../database/entities/users.entity.js';
import { Repository } from 'typeorm';
import { LoginDto } from '../dto/login.dto.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository (Users)
        private readonly userRepo : Repository<Users>,
    ){}

    async validateUser(Dto:LoginDto):Promise<{id: number, username: string, display_name: string;}>{
        const user = await this.userRepo.findOne({where: {username: Dto.username}})
        if(!user){
            throw new UnauthorizedException ("Invalid credentials")
        }
        const status = await bcrypt.compare(Dto.password, user.password);
        if(!status){
            throw new UnauthorizedException ("Invalid credentials")
        }
        return {id: user.id, username:user.username, display_name:user.displayName}
    }
}
    