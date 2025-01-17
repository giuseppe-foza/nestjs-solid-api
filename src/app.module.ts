import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { JwtModule } from './jwt/modules/jwt.module';
import { DatabaseModule } from './database/modules/database.module';
import { RedisModule } from './redis/modules/redis.module';
import { JwtMiddleware } from './jwt/presentation/middlewares/jwt.middleware';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from '@/features/product/modules/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule,
    DatabaseModule,
    RedisModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*');
  }
}
