import { vi } from 'vitest';
import { IProductRepository } from '@/features/product/contracts/product.repository';
import { IProduct } from '@/features/product/contracts/product';
import { UUID } from '@/utils/uuid';
import { ProductsListByIdService } from '@/features/product/services/products-list-by-id.service';
import { NotFoundException } from '@nestjs/common';
import { ErrorMessagesEnum } from '@/utils/enums/error-messages.enum';

describe('ProductsListByIdService Unit Tests', () => {
  let sut: ProductsListByIdService;
  let productRepository: IProductRepository;

  beforeEach(() => {
    productRepository = {
      findById: vi.fn(),
    } as unknown as IProductRepository;

    sut = new ProductsListByIdService(productRepository);
  });

  it('Should return a unique Product', async () => {
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

    const result = await sut.execute(UUID.generate());

    expect(productRepository.findById).toHaveBeenCalled();

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('description');
    expect(result).toHaveProperty('details');
    expect(result).toHaveProperty('value');
    expect(result).toHaveProperty('quantity');
    expect(result).toHaveProperty('active');
    expect(result).toHaveProperty('created_at');
    expect(result).toHaveProperty('updated_at');
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
