import { ICreateProduct, IProduct } from '@/features/product/contracts/product';

export interface IProductRepository {
  findAll(): Promise<IProduct[]>;
  findById(id: string): Promise<IProduct>;
  findByDescription(description: string): Promise<IProduct>;
  create(product: ICreateProduct): Promise<IProduct>;
  update(product: IProduct): Promise<IProduct>;
  remove(product: IProduct): Promise<void>;
}

export const IProductRepository = Symbol('IProductRepository');
