import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IProductListService } from '@/features/product/contracts/product-list.service';
import { IProductListByIdService } from '@/features/product/contracts/product-list-by-id.service';
import { IProductUpdateService } from '@/features/product/contracts/product-update.service';
import { IProductCreateService } from '@/features/product/contracts/product-create.service';
import { IProductRemoveService } from '@/features/product/contracts/product-remove.service';
import { IProduct } from '@/features/product/contracts/product';
import { ProductCreateDto } from '@/features/product/dto/product-create.dto';
import { ProductUpdateDto } from '@/features/product/dto/product-update.dto';

@Controller('products')
export class ProductController {
  @Inject(IProductListService)
  private readonly productListService: IProductListService;

  @Inject(IProductListByIdService)
  private readonly productListByIdService: IProductListByIdService;

  @Inject(IProductCreateService)
  private readonly productCreateService: IProductCreateService;

  @Inject(IProductUpdateService)
  private readonly productUpdateService: IProductUpdateService;

  @Inject(IProductRemoveService)
  private readonly productRemoveService: IProductRemoveService;

  @Get()
  async index(): Promise<IProduct[]> {
    return await this.productListService.execute();
  }

  @Get(':uuid')
  async show(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
  ): Promise<IProduct> {
    return await this.productListByIdService.execute(uuid);
  }

  @Post()
  async insert(@Body() productCreateDto: ProductCreateDto): Promise<IProduct> {
    return await this.productCreateService.execute(productCreateDto);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productUpdateDto: ProductUpdateDto,
  ): Promise<IProduct> {
    return await this.productUpdateService.execute(id, productUpdateDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    await this.productRemoveService.execute(id);
  }
}
