import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../../services/product-service/product.service';
import { Product_entity } from 'src/entities/product_entity';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  fetchAllProducts(): Promise<Product_entity[]> {
    return this.productService.getAllProducts();
  }
}
