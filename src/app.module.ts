import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/modules/database.module';
import { RedisModule } from './redis/modules/redis.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from '@/features/product/modules/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    RedisModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
