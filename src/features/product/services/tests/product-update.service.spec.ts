import { vi } from 'vitest';
import { IProductRepository } from '@/features/product/contracts/product.repository';
import { ProductCreateDto } from '@/features/product/dto/product-create.dto';
import { IProduct } from '@/features/product/contracts/product';
import { UUID } from '@/utils/uuid';
import { ProductUpdateService } from '@/features/product/services/product-update.service';

describe('ProductUpdateService Unit Tests', () => {
  let sut: ProductUpdateService;
  let productRepository: IProductRepository;
  let productCreateDto: ProductCreateDto;

  beforeEach(() => {
    productRepository = {
      findById: vi.fn(),
      findByDescription: vi.fn(),
      update: vi.fn(),
    } as unknown as IProductRepository;

    sut = new ProductUpdateService(productRepository);

    productCreateDto = new ProductCreateDto();
    productCreateDto.description = 'Test description';
    productCreateDto.details = 'Test details';
    productCreateDto.value = 20.99;
    productCreateDto.quantity = 10;
  });

  it('Should update a unique Product', async () => {
    const id = UUID.generate();

    const product: IProduct = {
      id,
      description: 'Test',
      details: 'Test',
      value: 10.89,
      quantity: 50,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    };

    vi.spyOn(productRepository, 'findById').mockResolvedValue(product);

    vi.spyOn(productRepository, 'findByDescription').mockResolvedValue(null);

    vi.spyOn(productRepository, 'update').mockResolvedValue({
      id,
      description: 'Test description',
      details: 'Test details',
      value: 20.99,
      quantity: 10,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    } as IProduct);

    const result = await sut.execute(id, productCreateDto);

    expect(productRepository.findById).toHaveBeenCalled();
    expect(productRepository.findByDescription).toHaveBeenCalled();
    expect(productRepository.update).toHaveBeenCalled();

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
