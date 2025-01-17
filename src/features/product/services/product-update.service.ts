import { IProduct } from '@/features/product/contracts/product';
import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from '@/features/product/contracts/product.repository';
import { ProductUpdateDto } from '@/features/product/dto/product-update.dto';
import { IProductUpdateService } from '@/features/product/contracts/product-update.service';
import { ProductValidator } from '@/features/product/validators/product.validator';

@Injectable()
export class ProductUpdateService implements IProductUpdateService {
  constructor(
    @Inject(IProductRepository)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(
    id: string,
    productUpdateDto: ProductUpdateDto,
  ): Promise<IProduct> {
    const { description, details, value, quantity } = productUpdateDto;

    const product = await ProductValidator.productExists(
      id,
      this.productRepository,
    );

    await ProductValidator.productDescriptionAlreadyExistsInUpdate(
      id,
      description,
      this.productRepository,
    );

    product.description = description;
    product.details = details;
    product.value = value;
    product.quantity = quantity;

    return await this.productRepository.update(product);
  }
}
