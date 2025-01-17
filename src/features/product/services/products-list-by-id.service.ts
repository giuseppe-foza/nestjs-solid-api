import { IProductListByIdService } from '@/features/product/contracts/product-list-by-id.service';
import { IProduct } from '@/features/product/contracts/product';
import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from '@/features/product/contracts/product.repository';
import { ProductValidator } from '@/features/product/validators/product.validator';

@Injectable()
export class ProductsListByIdService implements IProductListByIdService {
  constructor(
    @Inject(IProductRepository)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(id: string): Promise<IProduct> {
    return await ProductValidator.productExists(id, this.productRepository);
  }
}
