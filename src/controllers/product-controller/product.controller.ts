import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from '../../services/product-service/product.service';
import { Product_entity } from 'src/entities/product_entity';

@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  fetchAllProducts(): Promise<Product_entity[]> {
    return this.productService.getAllProducts();
  }

  @Post()
  createProductEntity(
    @Body() productEntityDto: ProductEntityDto): Promise<Product_entity> {
    return this.productService.createProduct(productEntityDto);
  }
}
