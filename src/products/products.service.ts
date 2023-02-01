import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/products.schema';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product | null> {
    return await this.productModel.findById(id);
  }

  async create(product: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

  async remove(id: string): Promise<Product | null> {
    return await this.productModel.findByIdAndRemove(id);
  }

  async update(id: string, productDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }
}
