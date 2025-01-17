import { IProduct } from '@/features/product/contracts/product';
import { ProductUpdateDto } from '@/features/product/dto/product-update.dto';

export interface IProductUpdateService {
  execute(id: string, productUpdateDto: ProductUpdateDto): Promise<IProduct>;
}

export const IProductUpdateService = Symbol('IProductUpdateService');
