export interface IProductRemoveService {
  execute(id: string): Promise<void>;
}

export const IProductRemoveService = Symbol('IProductRemoveService');
