import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../../services/product-service/product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  fetchAllProducts(): string {
    return this.productService.getAllProducts();
  }
}
