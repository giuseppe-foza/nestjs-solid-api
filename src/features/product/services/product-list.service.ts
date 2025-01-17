import { IProductListService } from '@/features/product/contracts/product-list.service';
import { IProduct } from '@/features/product/contracts/product';
import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from '@/features/product/contracts/product.repository';

@Injectable()
export class ProductListService implements IProductListService {
  constructor(
    @Inject(IProductRepository)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(): Promise<IProduct[]> {
    return await this.productRepository.findAll();
  }
}
