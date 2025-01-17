import { IProduct } from '@/features/product/contracts/product';

export interface IProductListByIdService {
  execute(id: string): Promise<IProduct>;
}

export const IProductListByIdService = Symbol('IProductListByIdService');
