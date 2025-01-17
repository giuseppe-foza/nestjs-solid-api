import { Injectable } from '@nestjs/common';
import { Redis as RedisClient } from 'ioredis';
import { IRedisRepository } from '@/redis/contracts/redis.repository.interface';

@Injectable()
export class RedisRepository implements IRedisRepository {
  private readonly client: RedisClient;

  constructor(client: RedisClient) {
    this.client = client;
  }

  public async save(key: string, value: any, ttl?: number): Promise<void> {
    if (ttl) {
      await this.client.set(key, JSON.stringify(value), 'EX', ttl);
    } else {
      await this.client.set(key, JSON.stringify(value));
    }
  }

  public async recover<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);

    if (!data) {
      return null;
    }

    return JSON.parse(data) as T;
  }

  public async remember<T>(
    key: string,
    fn: () => Promise<T>,
    ttl?: number,
  ): Promise<T> {
    let value = await this.recover<T>(key);

    if (!value) {
      value = await fn();
      await this.save(key, value, ttl);
    }

    return value;
  }

  public async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }

  public async flush(): Promise<void> {
    await this.client.flushall();
  }

  public async invalidateByPattern(pattern: string): Promise<void> {
    this.client.keys(pattern, (err, keys) => {
      if (err) throw err;

      if (keys.length > 0) {
        this.client.del(keys, (err) => {
          if (err) throw err;
        });
      }
    });
  }
}
