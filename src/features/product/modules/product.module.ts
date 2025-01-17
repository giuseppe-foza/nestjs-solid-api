import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormProductEntity } from '@/features/product/entities/typeorm.product.entity';
import { TypeormProductRepository } from '@/features/product/repositories/typeorm.product.repository';
import { IProductRepository } from '@/features/product/contracts/product.repository';
import { ProductListService } from '@/features/product/services/product-list.service';
import { IProductListService } from '@/features/product/contracts/product-list.service';
import { ProductsListByIdService } from '@/features/product/services/products-list-by-id.service';
import { IProductListByIdService } from '@/features/product/contracts/product-list-by-id.service';
import { ProductCreateService } from '@/features/product/services/product-create.service';
import { IProductCreateService } from '@/features/product/contracts/product-create.service';
import { ProductUpdateService } from '@/features/product/services/product-update.service';
import { IProductUpdateService } from '@/features/product/contracts/product-update.service';
import { ProductRemoveService } from '@/features/product/services/product-remove.service';
import { IProductRemoveService } from '@/features/product/contracts/product-remove.service';
import { ProductController } from '@/features/product/http/controllers/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TypeormProductEntity])],
  providers: [
    TypeormProductRepository,
    {
      provide: IProductRepository,
      useClass: TypeormProductRepository,
    },

    ProductListService,
    {
      provide: IProductListService,
      useClass: ProductListService,
    },

    ProductsListByIdService,
    {
      provide: IProductListByIdService,
      useClass: ProductsListByIdService,
    },

    ProductCreateService,
    {
      provide: IProductCreateService,
      useClass: ProductCreateService,
    },

    ProductUpdateService,
    {
      provide: IProductUpdateService,
      useClass: ProductUpdateService,
    },

    ProductRemoveService,
    {
      provide: IProductRemoveService,
      useClass: ProductRemoveService,
    },
  ],
  controllers: [ProductController],
})
export class ProductModule {}
