import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Encrypt } from './services/register/encryptPassword';
import { RegisterUser } from './services/register/registerUser';
import { verifyUser } from './services/register/verifyUser';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, Encrypt, RegisterUser, verifyUser]
})
export class AuthModule {}
