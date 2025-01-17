import { IProductRepository } from '@/features/product/contracts/product.repository';
import { ICreateProduct, IProduct } from '@/features/product/contracts/product';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeormProductEntity } from '@/features/product/entities/typeorm.product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeormProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(TypeormProductEntity)
    private readonly productEntityRepository: Repository<TypeormProductEntity>,
  ) {}

  async findAll(): Promise<IProduct[]> {
    return await this.productEntityRepository.find();
  }

  async findById(id: string): Promise<IProduct> {
    return await this.productEntityRepository.findOne({ where: { id } });
  }

  async findByDescription(description: string): Promise<IProduct> {
    return await this.productEntityRepository.findOne({
      where: { description },
    });
  }

  async create(product: ICreateProduct): Promise<IProduct> {
    const productEntity = await this.productEntityRepository.create(product);

    await this.productEntityRepository.save(productEntity);

    return productEntity;
  }

  async update(product: IProduct): Promise<IProduct> {
    await this.productEntityRepository.update(product.id, product);

    return product;
  }

  async remove(product: IProduct): Promise<void> {
    await this.productEntityRepository.delete(product.id);
  }
}
