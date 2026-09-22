import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './service/auth.service.js';
import type { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @Post('login')
  async login(@Body() body:LoginDto,@Req() req: Request, @Res() res: Response){
    try{
      const user = await this.authService.validateUser(body);
      return 
    }
    catch(err){
      const message = err instanceof Error ? err.message : 'Invalid username or password';
      return res.status(401).json({success: false, message})
    }
  }

  @Get('login')
  page(@Req() req: Request, @Res() res: Response){
    if((req.session as any)?.user){
      return res.redirect('overview')
    }
    res.locals.layout= false;
    return res.render('login');
  }
}
