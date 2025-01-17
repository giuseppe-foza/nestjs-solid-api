import { IProductCreateService } from '@/features/product/contracts/product-create.service';
import { ProductCreateDto } from '@/features/product/dto/product-create.dto';
import { ICreateProduct, IProduct } from '@/features/product/contracts/product';
import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from '@/features/product/contracts/product.repository';
import { ProductValidator } from '@/features/product/validators/product.validator';

@Injectable()
export class ProductCreateService implements IProductCreateService {
  constructor(
    @Inject(IProductRepository)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(productCreateDto: ProductCreateDto): Promise<IProduct> {
    const { description, details, value, quantity } = productCreateDto;

    await ProductValidator.productDescriptionAlreadyExists(
      description,
      this.productRepository,
    );

    const newProduct: ICreateProduct = {
      description,
      details,
      value,
      quantity,
      active: true,
    };

    return await this.productRepository.create(newProduct);
  }
}
