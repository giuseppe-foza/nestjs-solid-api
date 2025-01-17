import { vi } from 'vitest';
import { IProductRepository } from '@/features/product/contracts/product.repository';
import { IProduct } from '@/features/product/contracts/product';
import { UUID } from '@/utils/uuid';
import { NotFoundException } from '@nestjs/common';
import { ErrorMessagesEnum } from '@/utils/enums/error-messages.enum';
import { ProductRemoveService } from '@/features/product/services/product-remove.service';

describe('ProductRemoveService Unit Tests', () => {
  let sut: ProductRemoveService;
  let productRepository: IProductRepository;

  beforeEach(() => {
    productRepository = {
      findById: vi.fn(),
      remove: vi.fn(),
    } as unknown as IProductRepository;

    sut = new ProductRemoveService(productRepository);
  });

  it('Should remove a unique Product', async () => {
    const product: IProduct = {
      id: UUID.generate(),
      description: 'Test',
      details: 'Test',
      value: 10.89,
      quantity: 50,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    };

    vi.spyOn(productRepository, 'findById').mockResolvedValue(product);

    await sut.execute(UUID.generate());

    expect(productRepository.findById).toHaveBeenCalled();
    expect(productRepository.remove).toHaveBeenCalled();
  });

  it('Should return exception if Product not exists', async () => {
    vi.spyOn(productRepository, 'findById').mockResolvedValue(null);

    await expect(sut.execute(UUID.generate())).rejects.toThrow(
      NotFoundException,
    );
    await expect(sut.execute(UUID.generate())).rejects.toThrow(
      ErrorMessagesEnum.PRODUCT_NOT_FOUND,
    );
  });
});
