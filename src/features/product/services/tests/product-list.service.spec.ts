import { vi } from 'vitest';
import { ProductListService } from '@/features/product/services/product-list.service';
import { IProductRepository } from '@/features/product/contracts/product.repository';
import { IProduct } from '@/features/product/contracts/product';
import { UUID } from '@/utils/uuid';

describe('ProductListService Unit Tests', () => {
  let sut: ProductListService;
  let productRepository: IProductRepository;

  beforeEach(() => {
    productRepository = {
      findAll: vi.fn(),
    } as unknown as IProductRepository;

    sut = new ProductListService(productRepository);
  });

  it('Should return a list of Products', async () => {
    const products: IProduct[] = [
      {
        id: UUID.generate(),
        description: 'Test',
        details: 'Test',
        value: 10.89,
        quantity: 50,
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    vi.spyOn(productRepository, 'findAll').mockResolvedValue(products);

    const result = await sut.execute();

    if (Array.isArray(result)) {
      expect(Array.isArray(products)).toBe(true);

      result.forEach((product) => {
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('description');
        expect(product).toHaveProperty('details');
        expect(product).toHaveProperty('value');
        expect(product).toHaveProperty('quantity');
        expect(product).toHaveProperty('active');
        expect(product).toHaveProperty('created_at');
        expect(product).toHaveProperty('updated_at');
      });

      expect(result.every((product) => typeof product.id === 'string')).toBe(
        true,
      );
    }
  });
});
