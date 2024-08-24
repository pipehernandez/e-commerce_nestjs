import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

interface IEncrypt{
    encryptService(password: string): Promise<string>
}

@Injectable()
export class Encrypt implements IEncrypt{
    
    async encryptService(password: string): Promise<string>{
        const hashedPassword = await bcrypt.hashSync(password, 10);
        return hashedPassword;
    }
}