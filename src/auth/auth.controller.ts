import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';



@Controller('auth')
export class AuthController{
  constructor(private readonly authService: AuthService){}

  @Post('register')
  registerAccount(@Body() {email, password, role}: RegisterAuthDto){
    return this.authService.registerUser({email, password, role})
  }
}
