import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginDto {
    @IsString({ message: 'Username must be a string' })
    @IsNotEmpty({ message: 'Username is required' })
    @MaxLength(100, { message: 'Username is too long' })
    username: string;

    @IsString({ message: 'Password must be a string' })
    @IsNotEmpty({ message: 'Password is required' })
    @MaxLength(72, { message: 'Password is too long' })
    password: string;
}