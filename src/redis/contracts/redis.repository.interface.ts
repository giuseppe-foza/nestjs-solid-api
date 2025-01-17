export interface IRedisRepository {
  save(key: string, value: any, ttl?: number): Promise<void>;
  recover<T>(key: string): Promise<T | null>;
  remember<T>(key: string, fn: () => Promise<T>, ttl?: number): Promise<T>;
  invalidate(key: string): Promise<void>;
  flush(): Promise<void>;
  invalidateByPattern(pattern: string): Promise<void>;
}

export const IRedisRepository = Symbol('IRedisRepository');
