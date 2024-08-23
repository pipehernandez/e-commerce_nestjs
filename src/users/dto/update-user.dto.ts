import { PartialType } from '@nestjs/mapped-types';
import { RegisterUserDto } from 'src/auth/dto/register-auth.dto';
export class UpdateUserDto extends PartialType(RegisterUserDto) {}
