import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product-controller/product.controller';
import { ProductService } from './services/product-service/product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
