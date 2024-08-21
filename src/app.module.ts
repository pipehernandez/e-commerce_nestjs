import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorsMiddleware } from './common/middleware/middleware.module';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { Order } from './orders/entities/order.entity';

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
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(CorsMiddleware)
    .forRoutes('*');
  }
}
