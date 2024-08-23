import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    totalPrice: number;

    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]
}
