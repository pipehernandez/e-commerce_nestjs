import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { Order } from './orders/entities/order.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bnrttax2ydkiiici5fxr-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'upbkrxpznc2az5ux',
      password: '5OzHf7mYKLTIjkey00u6',
      database: 'bnrttax2ydkiiici5fxr',
      entities: [User, Product, Order],
      synchronize: true,
    })
  ],
  controllers: [UsersController],
  providers: [UsersService]
  
})
export class AppModule {}
