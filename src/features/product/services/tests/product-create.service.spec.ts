import { vi } from 'vitest';
import { IProductRepository } from '@/features/product/contracts/product.repository';
import { ProductCreateService } from '@/features/product/services/product-create.service';
import { ProductCreateDto } from '@/features/product/dto/product-create.dto';
import { IProduct } from '@/features/product/contracts/product';
import { UUID } from '@/utils/uuid';

describe('ProductCreateService Unit Tests', () => {
  let sut: ProductCreateService;
  let productRepository: IProductRepository;
  let productCreateDto: ProductCreateDto;

  beforeEach(() => {
    productRepository = {
      findByDescription: vi.fn(),
      create: vi.fn(),
    } as unknown as IProductRepository;

    sut = new ProductCreateService(productRepository);

    productCreateDto = new ProductCreateDto();
    productCreateDto.description = 'Test description';
    productCreateDto.details = 'Test details';
    productCreateDto.value = 20.99;
    productCreateDto.quantity = 10;
  });

  it('Should create new Product', async () => {
    vi.spyOn(productRepository, 'findByDescription').mockResolvedValue(null);
    vi.spyOn(productRepository, 'create').mockResolvedValue({
      id: UUID.generate(),
      description: 'Test description',
      details: 'Test details',
      value: 20.99,
      quantity: 10,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    } as IProduct);

    const result = await sut.execute(productCreateDto);

    expect(productRepository.findByDescription).toHaveBeenCalled();
    expect(productRepository.create).toHaveBeenCalled();

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('description');
    expect(result).toHaveProperty('details');
    expect(result).toHaveProperty('value');
    expect(result).toHaveProperty('quantity');
    expect(result).toHaveProperty('active');
    expect(result).toHaveProperty('created_at');
    expect(result).toHaveProperty('updated_at');
  });
});
