import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { IRedisRepository } from '@/redis/contracts/redis.repository.interface';
import { RedisRepository } from '@/redis/repositories/redis.repository';

@Global()
@Module({
  providers: [
    {
      provide: IRedisRepository,
      useFactory: async (configService: ConfigService) => {
        const redisHost = configService.get<string>('REDIS_HOST');
        const redisPort = configService.get<number>('REDIS_PORT');
        const redisPassword = configService.get<string>('REDIS_PASS');

        const redisClient = new Redis({
          host: redisHost,
          port: redisPort,
          password: redisPassword,
        });

        return new RedisRepository(redisClient);
      },
      inject: [ConfigService],
    },
  ],
  exports: [IRedisRepository],
})
export class RedisModule {}
