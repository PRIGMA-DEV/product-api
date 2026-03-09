import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product_entity } from 'src/entities/product_entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product_entity)
    private productEntityRepository: Repository<Product_entity>,
  ) {}

  getAllProducts(): Promise<Product_entity[]> {
    return this.productEntityRepository.find();
  }

  createProduct(): void {
    console.log(' enter method to create a product . . .');
  }

  updateProduct(): void {
    console.log(' enter method to update a product . . .');
  }

  deleteProduct(): void {
    console.log(' enter method to delete a product . . .');
  }
}
