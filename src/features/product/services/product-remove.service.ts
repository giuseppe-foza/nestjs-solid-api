import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from '@/features/product/contracts/product.repository';
import { IProductRemoveService } from '@/features/product/contracts/product-remove.service';
import { ProductValidator } from '@/features/product/validators/product.validator';

@Injectable()
export class ProductRemoveService implements IProductRemoveService {
  constructor(
    @Inject(IProductRepository)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const product = await ProductValidator.productExists(
      id,
      this.productRepository,
    );

    await this.productRepository.remove(product);
  }
}
