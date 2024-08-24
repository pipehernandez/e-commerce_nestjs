import { Injectable } from '@nestjs/common';
import { RegisterUser } from './services/register/registerUser';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
    constructor(private readonly register: RegisterUser){}
    async registerUser({email, password, role}: RegisterAuthDto){
        return await this.register.registerService({email, password, role})
    }    
}
