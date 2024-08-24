import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";

interface IVerifyUser{
    verifyService(email: string): Promise<User | null>
}

@Injectable()
export class verifyUser implements IVerifyUser{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
    
    async verifyService(email: string): Promise<User | null> {
        const user = await this.userRepository.findOne({where: {email}})
        return user;
    }

}