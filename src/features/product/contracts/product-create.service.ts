import { IProduct } from '@/features/product/contracts/product';
import { ProductCreateDto } from '@/features/product/dto/product-create.dto';

export interface IProductCreateService {
  execute(productCreateDto: ProductCreateDto): Promise<IProduct>;
}

export const IProductCreateService = Symbol('IProductCreateService');
