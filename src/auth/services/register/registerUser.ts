import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterAuthDto } from "src/auth/dto/register-auth.dto";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { verifyUser } from "./verifyUser";
import { Encrypt } from "./encryptPassword";

interface IRegister{
    registerUserService({email, password, role}: RegisterAuthDto): Promise<User>;
}

@Injectable()
export class RegisterUser implements IRegister{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, private readonly verifyService: verifyUser, private readonly encryptService: Encrypt){}
    registerUserService({ email, password, role }: RegisterAuthDto): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async registerService({email, password, role}: RegisterAuthDto): Promise<User>{
        
        const userExist = await this.verifyService.verifyService(email)
        if(userExist) throw new Error("User already exist")
        
        const encryptedPassword = await this.encryptService.encryptService(password)

        const user = this.userRepository.create({email, password:encryptedPassword, role})
        return await this.userRepository.save(user)
    }
}