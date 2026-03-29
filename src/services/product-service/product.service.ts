import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product_entity } from 'src/entities/product_entity';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product_entity)
    private productEntityRepository: Repository<Product_entity>,
  ) {}

  getAllProducts(): Promise<Product_entity[]> {
    return this.productEntityRepository.find();
  }

  /**
   * Create a new product entity
   *
   * @param productDto
   */
  createProduct(productDto: ProductEntityDto): Promise<Product_entity> {
    const productEntity: Product_entity = {
      uuid: randomUUID(),
      name: productDto.name,
      description: productDto.description,
      price: productDto.price,
    };
    return this.productEntityRepository.save(productEntity);
  }

  updateProduct(): void {
    console.log(' enter method to update a product . . .');
  }

  deleteProduct(): void {
    console.log(' enter method to delete a product . . .');
  }

findProductByCriteria(productSearchDto: ProductSearchDto):  Promise<Product_entity[]> {
  console.log('this is from the service: ', productSearchDto);
 return this.productEntityRepository.query(
  `SELECT *
   FROM product_entity
   WHERE name LIKE ?`,
  [`%${productSearchDto.criteria}%`]
);
}

}
