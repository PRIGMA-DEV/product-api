import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from '../../services/product-service/product.service';
import { Product_entity } from 'src/entities/product_entity';

@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  fetchAllProducts(): Promise<Product_entity[]> {
    console.info('Enter gel all . . . ');
    return this.productService.getAllProducts();
  }

  @Post()
  createProductEntity(
    @Body() productEntityDto: ProductEntityDto,
  ): Promise<Product_entity> {
    return this.productService.createProduct(productEntityDto);
  }

   
  @Post('/search')
  serachByCriteria(
    @Body() productSearchDto: ProductSearchDto): Promise<Product_entity[]> {
    console.log('this is from the controller: ', productSearchDto);
    return this.productService.findProductByCriteria(productSearchDto);
  }  


  @Get(':uuid')
  findProductByUuid(@Param('uuid') uuid: string): Promise<Product_entity> {
    console.log(uuid);
    return this.productService.findProductByUuid(uuid);
  }

  @Delete(':uuid')
  deleteByUuid(uuid: string): void{
    
  }
}

