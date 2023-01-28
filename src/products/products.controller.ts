import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get()
  @Redirect('https://google.com', 301)
  getAll(): string[] {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.productService.getById(id);
  }

  @Post()
  create(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Delete(':id')
  remove(@Param(':id') id: string) {
    return `Remove  ${id}`;
  }

  @Put(':id')
  update(@Body() UpdateProductDto: UpdateProductDto, @Param('id') id: string) {
    return `Update ` + id;
  }
}
