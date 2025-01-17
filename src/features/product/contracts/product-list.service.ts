import { IProduct } from '@/features/product/contracts/product';

export interface IProductListService {
  execute(): Promise<IProduct[]>;
}

export const IProductListService = Symbol('IProductListService');
