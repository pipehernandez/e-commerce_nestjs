import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { Order } from './orders/entities/order.entity';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
    }),
    UsersModule, ProductsModule, OrdersModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
  
})
export class AppModule {}
