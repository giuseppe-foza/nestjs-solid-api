import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductCreateDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  details?: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
