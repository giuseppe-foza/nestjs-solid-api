import { IProductRepository } from '@/features/product/contracts/product.repository';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { IProduct } from '@/features/product/contracts/product';
import { ErrorMessagesEnum } from '@/utils/enums/error-messages.enum';

export class ProductValidator {
  static async productExists(
    id: string,
    productRepository: IProductRepository,
  ): Promise<IProduct> {
    const product = await productRepository.findById(id);

    if (!product) {
      throw new NotFoundException(ErrorMessagesEnum.PRODUCT_NOT_FOUND);
    }

    return product;
  }

  static async productDescriptionAlreadyExists(
    description: string,
    productRepository: IProductRepository,
  ): Promise<void> {
    const product = await productRepository.findByDescription(description);

    if (product) {
      throw new ConflictException(
        ErrorMessagesEnum.PRODUCT_NAME_ALREADY_EXISTS,
      );
    }
  }

  static async productDescriptionAlreadyExistsInUpdate(
    id: string,
    description: string,
    productRepository: IProductRepository,
  ): Promise<void> {
    const product = await productRepository.findByDescription(description);

    if (product && product.id != id) {
      throw new ConflictException(
        ErrorMessagesEnum.PRODUCT_NAME_ALREADY_EXISTS,
      );
    }
  }
}
