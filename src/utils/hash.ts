import { hash, compare } from 'bcrypt';

export abstract class Hash {
  static async create(value: string): Promise<string> {
    return await hash(value, 10);
  }

  static async compare(payload: string, hashed: string): Promise<boolean> {
    return await compare(payload, hashed);
  }
}
