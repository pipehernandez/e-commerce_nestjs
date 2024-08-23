import { PartialType } from "@nestjs/mapped-types";
import { LoginUserDto } from "./login-auth.dto";

export class RegisterUserDto extends PartialType(LoginUserDto){}