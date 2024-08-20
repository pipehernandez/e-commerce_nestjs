import { IsEmail, IsIn, IsNotEmpty } from "class-validator";
import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsEmail({},{message: 'It has to be a valid email adress'})
    email: string;

    @Column()
    @IsNotEmpty({message: 'The password cant be in blank'})
    password: string;

    @Column({default: 'user'})
    @IsIn(['user', 'admin'], {message: 'El rol debe ser "user" o "admin".'})
    role: string;

    @OneToMany(() => Order, order => order.userId)
    orders: Order[];
}
