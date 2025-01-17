import { randomUUID } from 'node:crypto';

export class UUID {
  static generate(): string {
    return randomUUID();
  }
}
